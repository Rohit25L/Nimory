import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const bars = [
  "console.log(a)",
  "HR()",
  "var a=10",
  "console.log(a)",
  "            ",
  "function HR(){",
  "console.log(Hello Rohit)",
  "}",
];

const selectionOrder = [0, 1, 6, 2, 3, 4];

export default function AnimatedBars() {
  const [step, setStep] = useState(-1);
  const refs = useRef([]);
  const stackRefs = useRef([]);
  const [callStack, setCallStack] = useState([]);
  const [showGEC, setShowGEC] = useState(true);
  const [lastCallStack, setLastCallStack] = useState([]);
  const [showMemory, setShowMemory] = useState(false);
  const [memoryVar, setMemoryVar] = useState("a = undefined");
  const memoryVarRef = useRef(null);
  const [consoleLogs, setConsoleLogs] = useState([]);
  const consoleRef = useRef(null);

  const selectedIndex =
    step >= 0 ? selectionOrder[step % selectionOrder.length] : -1;

  useEffect(() => {
    refs.current.forEach((el, index) => {
      gsap.to(el, {
        x: index === selectedIndex ? 50 : 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  }, [selectedIndex]);

  useEffect(() => {
    const addedItems = callStack.filter(
      (item, index) => lastCallStack[index] !== item
    );
    addedItems.forEach((item, index) => {
      const el =
        stackRefs.current[callStack.length - addedItems.length + index];
      if (el) {
        const shouldAnimate =
          (item === "GEC" && step === 0) || (item === "HR()" && step === 2);

        if (shouldAnimate) {
          gsap.fromTo(
            el,
            { y: -200, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "bounce.out" }
          );
        }
      }
    });
    setLastCallStack(callStack);
  }, [callStack]);

  const animateRemoveFromStack = () => {
    if (callStack.length > 0) {
      const itemIndex = callStack.length - 1;
      const el = stackRefs.current[itemIndex];
      if (el) {
        gsap.to(el, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.in(1.7)",
          onComplete: () => {
            setCallStack((prev) => prev.slice(0, -1));
          },
        });
      }
    }
  };

  const animateConsoleLog = (message) => {
    let index = 0;
    const letters = message.split("");
    let current = "";

    const typeLetter = () => {
      if (index < letters.length) {
        current += letters[index];
        setConsoleLogs((logs) => [...logs.slice(0, -1), current]);
        index++;
        setTimeout(typeLetter, 100);
      }
    };

    setConsoleLogs((logs) => [...logs, ""]);
    typeLetter();
  };

  const handleStart = () => {
    setStep(0);
    setShowGEC(true);
    setCallStack(["GEC"]);
    setShowMemory(true);
    setMemoryVar("a = undefined");
  };

  const handleNext = () => {
    setStep((prev) => {
      const newStep = prev + 1;

      if (newStep === 1) {
        setCallStack(["GEC"]);
        animateConsoleLog("undefined");
      } else if (newStep === 2) {
        setCallStack(["GEC", "HR()"]);
      } else if (newStep === 3) {
        animateConsoleLog("Hallo Rohit");
      } else if (newStep === 4) {
        if (memoryVarRef.current) {
          gsap.to(memoryVarRef.current, {
            backgroundColor: "pink",
            duration: 1,
            onComplete: () => {
              setMemoryVar("a = 10");
              gsap.fromTo(
                memoryVarRef.current,
                { scale: 1 },
                {
                  scale: 1.1,
                  duration: 1.5,
                  onComplete: () => {
                    gsap.to(memoryVarRef.current, {
                      backgroundColor: "#6b7280",
                      scale: 1,
                      duration: 1,
                    });
                  },
                }
              );
            },
          });
        }
        animateRemoveFromStack();
      } else if (newStep === 5) {
        animateConsoleLog("10");
        animateRemoveFromStack();
      } else if (newStep >= selectionOrder.length - 1) {
        setShowGEC(false);
      }

      return newStep;
    });
  };

  const handleWrapAround = () => {
    setStep((prev) => (prev + 1) % selectionOrder.length);
  };

  const handleRemoveFromCallStack = () => {
    animateRemoveFromStack();
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-900 min-h-screen text-white font-mono flex-wrap">
      <div className="flex flex-col items-center">
        {showMemory && (
          <div className="bg-[#362d2d] p-6 rounded-lg text-white text-left w-[300px] mb-6 mt-10 flex flex-col">
            <div className="text-center text-lg mb-4">memory</div>
            <div
              ref={memoryVarRef}
              className="bg-gray-500 p-2 mb-2 rounded inline-block transition-colors"
            >
              {memoryVar}
            </div>
            <div className="bg-gray-500 p-2 mb-2 rounded inline-block">
              <pre className=" p-2 rounded">
                HR() {"{"}
                {'\n  console.log("Hello Rohit")'}
                {"\n"}
                {"}"}
              </pre>
            </div>
          </div>
        )}
        <div className="mb-2 w-[300px]"></div>
      </div>

      <div className="flex gap-8 w-6/8 justify-evenly">
        <div className=" text-black p-4 rounded shadow w-[400px]">
          <div className="bg-gray-900 p-4 rounded">
            {bars.map((text, i) => (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                className="bg-gray-600 text-white rounded px-4 py-2 mb-2 h-10"
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="border-4 border-pink-300  border-t-0 p-2 w-32 h-64 flex flex-col-reverse items-center gap-2 overflow-hidden">
            {callStack.map((item, index) => (
              <div
                key={index}
                ref={(el) => (stackRefs.current[index] = el)}
                className="bg-pink-300 text-black px-4 py-2 rounded"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex justify-center flex-col ">
            <div className="rounded w-122 text-center font-bold text-xl">
              Call Stack
            </div>
            <div className="bg-[#2b2626] text-white p-2 rounded w-122 h-62 text-left overflow-y-auto text-sm absolute bottom-15">
               <h1 className="text-center font-bold w-full text-xl"> console</h1>
               <h2>-----------------------------------------------------------------------------------------------------</h2>
              {consoleLogs.map((log, i) => (
                <div key={i}>{log}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-6 w-full justify-center mr-40">
        <button
          onClick={handleStart}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
        >
          Start
        </button>
        <button
          onClick={handleNext}
          disabled={step === -1 || step >= selectionOrder.length - 1}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
