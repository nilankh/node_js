/*
what happens in v8 engine
Suppose you write some js code it is given to v8 engine the first thing is parsing happens, inside this parsing first is lexical analysis, in this the code you have given to v8 it will be broken down into tokens that is also known as tokenization and after this syntax analysis happens, it means, the code which broke down into tokens, it will be convert into ast(Abstract syntax tree) and this we give ast to interpreter.

Now the question  arises what is interpreter?

    Before this i would like to explain, there are two type of languages ----
        1) INTERPRERT LANGUAGE
        2) COMPLIE LANGUAGE

        INTERPRERTER LANGUAGE: In interpreter language there is a interpreter which reads code line by line, and it is very fast in initital.

        COMPLIE LANGUAGE: As soon as code is given first step is compilation that is high level code is converted into machine code and then machine code gets exectued, Initially heavily, but executes very fast.

            Now another question arises is javascript compiled or interpreter language?

                Js engine, v8 engine has interpreter and complier both, the complier method in js is known as JIT compliation(JUST IN TIME)

Now, lets get back to original things,

So AST give this to interpreter google named its as ignition interpreter , job of this is to convert the code into byte code after this execution happens
Ignition interpreter start reading code line by line and start converting it into byte code, when ignition interpreter is doing its job, it recognises that some of the code (also knowns as hot code), function variable which is used a lot, it idnetifies this and it tries to gives these codee to turbo fan compiler so that it can  optimised the code, so whenever it run next time, it just execute very very fast, and there is another thing called deoptimised too, suppose you have a function called calculateSum which takes two number 10 and 5 and it return you the sum of the number, when you call it again and again, so js sees this is the hot peice of code, so turbo fan compiler will take this code and optimised it, while optimising it will assume that it will only take integer, so when you call the same function with string, the optimizaiton fails, because turbo fan compiler has otpimised for integer, so as soon as it sees, it will deoptimised the code, and again igniton interperer will start the same work.
        

*/