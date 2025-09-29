x86 Assembly Simulator
=====================

The x86 Assembly Simulator is an interactive educational tool that provides hands-on experience with low-level assembly programming in the context of Arabic OS. This simulator executes x86 assembly instructions step-by-step, showing register changes, memory operations, and the specific assembly routines used for Arabic text processing at the hardware level.

Overview
========

Assembly language programming is fundamental to understanding how computers work at the lowest level. Arabic OS includes specialized assembly routines for efficient Arabic text processing, UTF-8 manipulation, and bidirectional text algorithms. This simulator provides a safe environment to learn assembly programming while exploring the low-level implementation of Arabic computing concepts.

Key Learning Objectives
=======================

By using this tool, you will understand:

* x86 assembly language syntax and instruction set
* How assembly instructions manipulate registers and memory
* Low-level implementation of Arabic text processing algorithms
* The relationship between high-level code and assembly
* Performance optimization through assembly programming
* Debugging techniques for assembly code

Interactive Features
====================

Real-time Assembly Execution
----------------------------

Step-by-step assembly program execution:

* **Instruction-by-Instruction Execution**: Watch each assembly instruction execute
* **Register Monitoring**: Real-time register value updates (EAX, EBX, ECX, EDX, etc.)
* **Memory Visualization**: See memory contents change during program execution
* **Flag Register Display**: Monitor CPU flags (Zero, Carry, Sign, etc.)
* **Program Counter Tracking**: Follow instruction pointer (EIP) progression

Interactive Code Editor
-----------------------

Write and execute assembly programs:

* **Syntax Highlighting**: Color-coded assembly instructions and operands
* **Error Detection**: Real-time syntax error checking
* **Code Completion**: Assembly instruction and register auto-completion
* **Sample Programs**: Pre-loaded examples for Arabic text processing
* **Save/Load Functionality**: Manage your assembly programs

CPU State Visualization
-----------------------

Comprehensive processor state display:

* **General Purpose Registers**: EAX, EBX, ECX, EDX, ESI, EDI, EBP, ESP
* **Segment Registers**: CS, DS, ES, FS, GS, SS
* **Index Registers**: ESI (Source Index), EDI (Destination Index)
* **Stack Pointer**: ESP and base pointer EBP tracking
* **Flags Register**: Individual flag bit visualization
* **Instruction Pointer**: Current execution address (EIP)

Memory Viewer
------------

Interactive memory inspection:

* **Hexadecimal Display**: Raw memory contents in hex format
* **ASCII Interpretation**: Character representation of memory data
* **UTF-8 Visualization**: Arabic characters in memory
* **Stack Visualization**: Function call stack with return addresses
* **Data Segment Display**: Program variables and constants

Technical Specifications
========================

x86 Instruction Set Support
---------------------------

The simulator implements essential x86 instructions:

**Data Movement Instructions**:

.. list-table:: Data Movement Instructions
   :header-rows: 1
   :widths: 15 25 60

   * - Instruction
     - Syntax
     - Purpose
   * - MOV
     - MOV dest, src
     - Copy data between registers/memory
   * - PUSH
     - PUSH src
     - Push value onto stack
   * - POP
     - POP dest
     - Pop value from stack
   * - LEA
     - LEA reg, [addr]
     - Load effective address
   * - XCHG
     - XCHG op1, op2
     - Exchange two operands

**Arithmetic Instructions**:

.. list-table:: Arithmetic Instructions
   :header-rows: 1
   :widths: 15 25 60

   * - Instruction
     - Syntax
     - Purpose
   * - ADD
     - ADD dest, src
     - Addition operation
   * - SUB
     - SUB dest, src
     - Subtraction operation
   * - MUL
     - MUL src
     - Unsigned multiplication
   * - DIV
     - DIV src
     - Unsigned division
   * - INC
     - INC dest
     - Increment by 1
   * - DEC
     - DEC dest
     - Decrement by 1

**Logical Instructions**:

.. list-table:: Logical Instructions
   :header-rows: 1
   :widths: 15 25 60

   * - Instruction
     - Syntax
     - Purpose
   * - AND
     - AND dest, src
     - Bitwise AND operation
   * - OR
     - OR dest, src
     - Bitwise OR operation
   * - XOR
     - XOR dest, src
     - Bitwise XOR operation
   * - NOT
     - NOT dest
     - Bitwise complement
   * - SHL
     - SHL dest, count
     - Shift left logical
   * - SHR
     - SHR dest, count
     - Shift right logical

**Control Flow Instructions**:

.. list-table:: Control Flow Instructions
   :header-rows: 1
   :widths: 15 25 60

   * - Instruction
     - Syntax
     - Purpose
   * - JMP
     - JMP label
     - Unconditional jump
   * - JE/JZ
     - JE label
     - Jump if equal/zero
   * - JNE/JNZ
     - JNE label
     - Jump if not equal/zero
   * - JG/JNLE
     - JG label
     - Jump if greater
   * - JL/JNGE
     - JL label
     - Jump if less
   * - CALL
     - CALL label
     - Call subroutine
   * - RET
     - RET
     - Return from subroutine

**String Instructions**:

.. list-table:: String Processing Instructions
   :header-rows: 1
   :widths: 15 25 60

   * - Instruction
     - Syntax
     - Purpose
   * - MOVS
     - MOVS
     - Move string data
   * - CMPS
     - CMPS
     - Compare strings
   * - SCAS
     - SCAS
     - Scan string
   * - LODS
     - LODS
     - Load string
   * - STOS
     - STOS
     - Store string

Register Architecture
--------------------

x86 register set simulation:

.. code-block:: text

   32-bit General Purpose Registers:
   ┌─────────────────────────────────┐
   │            EAX (32-bit)         │  ← Accumulator
   ├─────────────────┬───────────────┤
   │                 │   AX (16-bit) │
   │                 ├───────┬───────┤
   │                 │ AH(8) │ AL(8) │
   └─────────────────┴───────┴───────┘

   EBX (Base Register)    - General purpose, memory addressing
   ECX (Count Register)   - Loop counter, string operations
   EDX (Data Register)    - I/O operations, multiplication/division
   ESI (Source Index)     - String source pointer
   EDI (Destination Index)- String destination pointer
   EBP (Base Pointer)     - Stack frame base
   ESP (Stack Pointer)    - Current stack top

   Flags Register (EFLAGS):
   CF (Carry Flag)        - Arithmetic carry/borrow
   ZF (Zero Flag)         - Result is zero
   SF (Sign Flag)         - Result is negative
   OF (Overflow Flag)     - Signed arithmetic overflow
   PF (Parity Flag)       - Even number of 1 bits
   DF (Direction Flag)    - String operation direction

Arabic Text Processing in Assembly
==================================

UTF-8 Character Processing
--------------------------

Assembly routines for UTF-8 manipulation:

.. code-block:: asm

   ; UTF-8 Character Length Detection
   ; Input: AL = first UTF-8 byte
   ; Output: CL = character length in bytes
   utf8_char_length:
       MOV CL, 1           ; Default to 1 byte (ASCII)
       CMP AL, 0x80        ; Check if >= 0x80
       JB  utf8_done       ; ASCII character, length = 1

       CMP AL, 0xE0        ; Check if < 0xE0 (2-byte sequence)
       JB  utf8_2byte      ; 2-byte UTF-8 character

       CMP AL, 0xF0        ; Check if < 0xF0 (3-byte sequence)
       JB  utf8_3byte      ; 3-byte UTF-8 character (Arabic)

       MOV CL, 4           ; 4-byte UTF-8 character
       JMP utf8_done

   utf8_2byte:
       MOV CL, 2
       JMP utf8_done

   utf8_3byte:
       MOV CL, 3           ; Arabic characters are 3 bytes in UTF-8

   utf8_done:
       RET

   ; UTF-8 to Unicode Conversion
   ; Input: ESI = UTF-8 string pointer, EDI = Unicode buffer
   ; Output: Unicode characters in EDI buffer
   utf8_to_unicode:
       XOR EAX, EAX        ; Clear accumulator
       LODSB               ; Load byte from [ESI] into AL

       CMP AL, 0x80        ; ASCII character?
       JB  store_ascii

       ; Multi-byte UTF-8 sequence
       CMP AL, 0xE0        ; 3-byte sequence (Arabic)?
       JB  process_2byte
       JE  process_3byte

   process_3byte:
       ; Extract first 4 bits from first byte
       AND AL, 0x0F        ; Keep only lower 4 bits
       SHL EAX, 12         ; Shift to high position

       ; Get second byte
       LODSB
       AND AL, 0x3F        ; Keep only lower 6 bits
       SHL AL, 6
       OR  EAX, EAX        ; Combine with first part

       ; Get third byte
       LODSB
       AND AL, 0x3F        ; Keep only lower 6 bits
       OR  EAX, EAX        ; Final Unicode value

       JMP store_unicode

   store_ascii:
       ; AL already contains ASCII value
   store_unicode:
       STOSD               ; Store Unicode value to [EDI]
       RET

Arabic Character Shaping
------------------------

Assembly implementation of contextual Arabic shaping:

.. code-block:: asm

   ; Arabic Character Shaping Engine
   ; Input: ESI = Unicode text, ECX = character count
   ; Output: Shaped characters in place
   arabic_shape:
       PUSH EBP
       MOV  EBP, ESP
       PUSH EBX
       PUSH EDX

       ; Initialize state
       XOR  EBX, EBX       ; Previous character
       XOR  EDX, EDX       ; Current position

   shape_loop:
       CMP  EDX, ECX       ; Check if done
       JGE  shape_done

       ; Load current character
       MOV  EAX, [ESI + EDX*4]

       ; Check if Arabic character
       CMP  EAX, 0x0600    ; Arabic block start
       JB   next_char
       CMP  EAX, 0x06FF    ; Arabic block end
       JA   next_char

       ; Determine contextual form
       CALL determine_context
       CALL get_shaped_form

       ; Store shaped character
       MOV  [ESI + EDX*4], EAX

   next_char:
       MOV  EBX, EAX       ; Save as previous character
       INC  EDX            ; Next position
       JMP  shape_loop

   shape_done:
       POP  EDX
       POP  EBX
       POP  EBP
       RET

   ; Determine character context (isolated, initial, medial, final)
   ; Input: EAX = current char, EBX = previous char, [ESI+EDX+4] = next char
   ; Output: AL = context type (0=isolated, 1=initial, 2=medial, 3=final)
   determine_context:
       PUSH ECX
       XOR  AL, AL         ; Default to isolated

       ; Check if previous character connects
       CALL can_connect_right
       TEST CL, CL
       JZ   check_next

       OR   AL, 2          ; Set medial/final bit

   check_next:
       ; Check if next character connects
       PUSH EAX
       MOV  EAX, [ESI + EDX*4 + 4]
       CALL can_connect_left
       POP  EAX
       TEST CL, CL
       JZ   context_done

       OR   AL, 1          ; Set initial/medial bit

   context_done:
       POP  ECX
       RET

BiDi Algorithm Implementation
----------------------------

Assembly implementation of bidirectional text processing:

.. code-block:: asm

   ; Bidirectional Text Reordering
   ; Input: ESI = text buffer, ECX = character count
   ; Output: Visually reordered text
   bidi_reorder:
       PUSH EBP
       MOV  EBP, ESP
       SUB  ESP, 1024      ; Local buffer for levels

       ; Step 1: Determine character types
       LEA  EDI, [EBP-512] ; Character types buffer
       CALL classify_characters

       ; Step 2: Resolve embedding levels
       LEA  EDI, [EBP-1024] ; Levels buffer
       CALL resolve_levels

       ; Step 3: Reorder based on levels
       CALL reorder_by_levels

       ADD  ESP, 1024
       POP  EBP
       RET

   ; Classify characters as LTR, RTL, or neutral
   classify_characters:
       XOR  EDX, EDX       ; Position counter

   classify_loop:
       CMP  EDX, ECX
       JGE  classify_done

       MOV  EAX, [ESI + EDX*4]

       ; Check for Arabic characters (RTL)
       CMP  EAX, 0x0600
       JB   check_latin
       CMP  EAX, 0x06FF
       JA   check_latin
       MOV  BYTE PTR [EDI + EDX], 1    ; RTL = 1
       JMP  next_classify

   check_latin:
       ; Check for Latin characters (LTR)
       CMP  EAX, 0x0041    ; 'A'
       JB   neutral_char
       CMP  EAX, 0x007A    ; 'z'
       JA   neutral_char
       MOV  BYTE PTR [EDI + EDX], 0    ; LTR = 0
       JMP  next_classify

   neutral_char:
       MOV  BYTE PTR [EDI + EDX], 2    ; Neutral = 2

   next_classify:
       INC  EDX
       JMP  classify_loop

   classify_done:
       RET

Practical Exercises
===================

Exercise 1: Basic Assembly Programming
-------------------------------------

Learn fundamental assembly concepts:

**Program 1**: Simple arithmetic operations

.. code-block:: asm

   ; Calculate: result = (a + b) * c
   MOV EAX, 10         ; a = 10
   MOV EBX, 20         ; b = 20
   MOV ECX, 3          ; c = 3

   ADD EAX, EBX        ; EAX = a + b = 30
   MUL ECX             ; EAX = EAX * ECX = 90

   MOV [result], EAX   ; Store result in memory

**Expected outcomes**:
* EAX final value: 90
* Understanding of register usage
* Memory storage operations

Exercise 2: String Manipulation
------------------------------

Work with string processing:

**Program 2**: Count characters in a string

.. code-block:: asm

   ; Count non-zero characters in string
   MOV ESI, string_addr    ; Load string address
   XOR ECX, ECX           ; Clear counter

   count_loop:
       LODSB              ; Load byte from [ESI] into AL
       TEST AL, AL        ; Check if zero (end of string)
       JZ count_done      ; Jump if zero
       INC ECX            ; Increment counter
       JMP count_loop     ; Continue loop

   count_done:
       MOV [char_count], ECX   ; Store count

Exercise 3: Arabic Text Processing
----------------------------------

Implement Arabic-specific algorithms:

**Program 3**: UTF-8 Arabic character detection

.. code-block:: asm

   ; Count Arabic characters in UTF-8 text
   MOV ESI, utf8_text     ; UTF-8 text pointer
   XOR EDX, EDX           ; Arabic character counter

   utf8_loop:
       LODSB              ; Load next byte
       TEST AL, AL        ; End of string?
       JZ utf8_done

       ; Check for 3-byte UTF-8 sequence (Arabic range)
       CMP AL, 0xD8       ; First byte of Arabic range
       JB not_arabic
       CMP AL, 0xDB       ; Last byte of Arabic range
       JA not_arabic

       ; This is Arabic - skip next 2 bytes
       LODSB              ; Skip second byte
       LODSB              ; Skip third byte
       INC EDX            ; Count Arabic character
       JMP utf8_loop

   not_arabic:
       ; Skip continuation bytes if multi-byte UTF-8
       CMP AL, 0x80
       JB utf8_loop       ; ASCII - continue
       ; Handle other multi-byte sequences...
       JMP utf8_loop

   utf8_done:
       MOV [arabic_count], EDX

Performance Analysis
===================

Instruction Timing
------------------

Understanding x86 instruction performance:

.. list-table:: Instruction Cycle Counts
   :header-rows: 1
   :widths: 20 15 20 45

   * - Instruction
     - Cycles
     - Throughput
     - Notes
   * - MOV reg, reg
     - 1
     - 1/cycle
     - Register to register
   * - MOV reg, mem
     - 3-4
     - 1/2 cycles
     - Memory read penalty
   * - ADD reg, reg
     - 1
     - 1/cycle
     - Fast arithmetic
   * - MUL reg
     - 3-4
     - 1/cycle
     - Modern CPU optimization
   * - DIV reg
     - 20-30
     - 1/20 cycles
     - Expensive operation
   * - CALL/RET
     - 2-3
     - 1/2 cycles
     - Stack operations
   * - JMP
     - 1
     - 1/cycle
     - Predicted branches

Memory Access Patterns
----------------------

Optimizing memory usage in assembly:

**Sequential Access** (Cache-friendly):

.. code-block:: asm

   ; Good: Sequential memory access
   MOV ESI, array_start
   MOV ECX, array_length

   sequential_loop:
       LODSB              ; Load and increment ESI
       ; Process byte in AL
       LOOP sequential_loop

**Random Access** (Cache-unfriendly):

.. code-block:: asm

   ; Poor: Random memory access
   MOV ESI, index_array
   MOV ECX, array_length

   random_loop:
       MOV EBX, [ESI]     ; Load index
       MOV AL, [data_array + EBX]  ; Random access
       ; Process byte in AL
       ADD ESI, 4         ; Next index
       LOOP random_loop

Optimization Techniques
======================

Register Allocation
------------------

Efficient use of CPU registers:

**Good Register Usage**:

.. code-block:: asm

   ; Efficient: Keep frequently used data in registers
   MOV EAX, [source_ptr]      ; Load once
   MOV EBX, [dest_ptr]        ; Load once
   MOV ECX, [count]           ; Load once

   copy_loop:
       MOV DL, [EAX]          ; Source byte
       MOV [EBX], DL          ; Destination byte
       INC EAX                ; Increment pointers
       INC EBX
       DEC ECX                ; Decrement counter
       JNZ copy_loop

**Poor Register Usage**:

.. code-block:: asm

   ; Inefficient: Repeated memory access
   copy_loop:
       MOV EAX, [source_ptr]  ; Reload every iteration
       MOV EBX, [dest_ptr]    ; Reload every iteration
       MOV DL, [EAX]
       MOV [EBX], DL
       INC DWORD PTR [source_ptr]  ; Memory arithmetic
       INC DWORD PTR [dest_ptr]
       DEC DWORD PTR [count]
       JNZ copy_loop

Loop Optimization
-----------------

Optimizing loop structures:

**Loop Unrolling**:

.. code-block:: asm

   ; Original loop
   standard_loop:
       MOV AL, [ESI]
       MOV [EDI], AL
       INC ESI
       INC EDI
       DEC ECX
       JNZ standard_loop

   ; Unrolled loop (4x)
   unrolled_loop:
       CMP ECX, 4
       JB handle_remainder

       ; Process 4 elements at once
       MOV AL, [ESI]
       MOV [EDI], AL
       MOV AL, [ESI+1]
       MOV [EDI+1], AL
       MOV AL, [ESI+2]
       MOV [EDI+2], AL
       MOV AL, [ESI+3]
       MOV [EDI+3], AL

       ADD ESI, 4
       ADD EDI, 4
       SUB ECX, 4
       JMP unrolled_loop

   handle_remainder:
       ; Handle remaining 1-3 elements
       TEST ECX, ECX
       JZ done
       ; Process remaining elements...

Debugging Assembly Code
======================

Common Assembly Errors
----------------------

Typical mistakes and how to avoid them:

**Stack Imbalance**:

.. code-block:: asm

   ; Wrong: Unbalanced stack
   wrong_function:
       PUSH EAX
       PUSH EBX
       ; ... function body ...
       POP EAX              ; Error: Should be EBX
       RET                  ; Stack corrupted

   ; Correct: Balanced stack
   correct_function:
       PUSH EAX
       PUSH EBX
       ; ... function body ...
       POP EBX              ; Restore in reverse order
       POP EAX
       RET

**Register Corruption**:

.. code-block:: asm

   ; Wrong: Modifying caller's registers
   bad_function:
       MOV EAX, 100         ; Destroys caller's EAX
       ; ... function logic ...
       RET

   ; Correct: Preserve caller's registers
   good_function:
       PUSH EAX             ; Save caller's register
       MOV EAX, 100         ; Use register
       ; ... function logic ...
       POP EAX              ; Restore caller's register
       RET

Assembly Debugging Techniques
----------------------------

Systematic debugging approach:

**Breakpoint Strategy**:

.. code-block:: asm

   ; Insert debug breakpoints
   debug_function:
       ; Breakpoint 1: Function entry
       NOP                  ; Debugger breakpoint location

       MOV EAX, [param1]
       ; Breakpoint 2: After parameter load
       NOP

       CALL subroutine
       ; Breakpoint 3: After subroutine call
       NOP

       MOV [result], EAX
       ; Breakpoint 4: Before function exit
       NOP
       RET

**Register Monitoring**:

.. code-block:: asm

   ; Monitor register changes
   monitor_registers:
       ; Expected: EAX=0, EBX=0, ECX=10
       MOV EAX, 0
       MOV EBX, 0
       MOV ECX, 10

   loop_start:
       ; Expected: EAX increments, ECX decrements
       INC EAX
       DEC ECX
       JNZ loop_start
       ; Expected: EAX=10, ECX=0

Real-World Applications
======================

Operating System Development
---------------------------

Assembly programming in OS development:

* **Kernel Boot Code**: Initial system startup routines
* **Interrupt Handlers**: Hardware interrupt processing
* **Context Switching**: Process state save/restore
* **Memory Management**: Page table manipulation
* **Device Drivers**: Hardware-specific assembly code

Performance-Critical Applications
---------------------------------

Where assembly optimization matters:

* **Text Processing Engines**: Arabic shaping algorithms
* **Graphics Rendering**: Font rendering and BiDi display
* **Compression Algorithms**: UTF-8 encoding/decoding
* **Cryptographic Functions**: Security-sensitive operations
* **Real-time Systems**: Deterministic timing requirements

Educational Applications
-----------------------

Teaching computer architecture:

* **Computer Science Education**: Understanding CPU operation
* **Systems Programming**: Low-level programming concepts
* **Embedded Systems**: Microcontroller programming
* **Reverse Engineering**: Analyzing compiled code

Integration with Arabic OS
==========================

System Integration
------------------

Assembly code integration points:

* **Kernel Modules**: Critical kernel functions in assembly
* **Optimized Libraries**: Performance-critical Arabic text functions
* **Boot Loader**: System initialization assembly code
* **Device Drivers**: Hardware-specific assembly routines

Development Tools
----------------

Assembly development environment:

* **Assembler**: NASM/MASM integration with Arabic OS
* **Debugger**: Assembly-level debugging capabilities
* **Profiler**: Performance analysis of assembly code
* **Cross-compiler**: Generate assembly from high-level languages

API Reference
=============

For developers working with assembly:

**Assembly Simulator API**:

.. code-block:: cpp

   class AssemblySimulator {
   public:
       // Initialize simulator
       bool initialize(const SimulatorConfig& config);

       // Load assembly program
       bool loadProgram(const std::string& assemblyCode);

       // Execution control
       void executeStep();
       void executeToBreakpoint();
       void executeProgram();
       void reset();

       // State inspection
       RegisterState getRegisters();
       MemoryState getMemory(uint32_t address, size_t length);
       std::vector<Instruction> getInstructions();

       // Debugging support
       bool setBreakpoint(uint32_t address);
       void removeBreakpoint(uint32_t address);
       ExecutionTrace getTrace();
   };

**JavaScript Simulator Interface**:

.. code-block:: javascript

   class AssemblySimulatorUI {
       constructor() {
           this.simulator = new AssemblySimulator();
           this.isRunning = false;
           this.breakpoints = new Set();
       }

       // Load and execute assembly code
       async loadProgram(code) {
           const success = await this.simulator.loadProgram(code);
           if (success) {
               this.updateUI();
               this.displayInstructions();
           }
           return success;
       }

       // Step execution
       executeStep() {
           this.simulator.executeStep();
           this.updateRegisters();
           this.updateMemory();
           this.highlightCurrentInstruction();
       }

       // Register display
       updateRegisters() {
           const registers = this.simulator.getRegisters();
           for (const [name, value] of Object.entries(registers)) {
               document.getElementById(`reg-${name}`).textContent =
                   `0x${value.toString(16).padStart(8, '0')}`;
           }
       }
   }

Integration with Other Tools
============================

The Assembly Simulator complements other Arabic OS components:

* Use :doc:`kernel-debugger` for kernel-level assembly debugging
* Apply :doc:`memory-layout` knowledge for memory management assembly
* Reference :doc:`utf8-visualizer` for text processing assembly optimization
* Connect to :doc:`font-renderer` for graphics assembly programming

Understanding assembly programming is essential for system-level development, performance optimization, and deep comprehension of computer architecture.

Further Learning
================

Continue your assembly programming journey with:

* :doc:`kernel-debugger` - Debug assembly code at the kernel level
* :doc:`memory-layout` - Understand memory management in assembly
* :doc:`../../../tutorials/advanced/assembly-optimization` - Advanced assembly optimization techniques
* :doc:`../../../developer-guide/api/low-level-programming` - System programming with assembly

Master assembly programming to unlock the full potential of computer hardware and create highly optimized Arabic computing systems.