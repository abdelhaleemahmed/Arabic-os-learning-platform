Bidirectional Text Demo
======================

The Bidirectional Text Demo is an interactive tool that demonstrates how Arabic OS handles bidirectional (BiDi) text processing. This tool showcases the breakthrough UTF-8 implementation and illustrates how Arabic (RTL) and Latin (LTR) text can coexist seamlessly in a single system.

Overview
========

Bidirectional text processing is one of the most complex challenges in internationalization. Arabic script flows right-to-left (RTL), while Latin script flows left-to-right (LTR). When these scripts appear together, sophisticated algorithms determine the proper display order while maintaining readability for both script types.

Key Learning Objectives
=======================

By using this tool, you will understand:

* The Unicode Bidirectional Algorithm (UBA) fundamentals
* How mixed RTL/LTR text is processed and displayed
* Character classification for directional processing
* The Arabic OS text rendering pipeline
* Real-world challenges in multilingual text display

Interactive Features
====================

Live Bidirectional Text Processor
----------------------------------

The main interface provides real-time bidirectional text processing:

* **Text Input**: Enter any combination of Arabic and Latin text
* **Instant Rendering**: See immediate BiDi algorithm results
* **Character Analysis**: Detailed breakdown of each character's properties
* **Direction Statistics**: Metrics on text composition and flow
* **UTF-8 Encoding Info**: Byte-level analysis of input text

Preset Text Examples
--------------------

Quick access to common bidirectional text scenarios:

* **"مرحبا Hello"** - Basic Arabic-English mixing
* **"Arabic OS نظام تشغيل عربي"** - Technical terminology mixing
* **"Version 2.0 الإصدار الثاني"** - Versioning with translations
* **"UTF-8 يدعم العربية"** - Encoding demonstration
* **Pure Arabic** - Right-to-left only text
* **Pure English** - Left-to-right only text

Character Analysis Panel
------------------------

For each character in your input, view:

* **Character Display**: Visual representation with directional indicators
* **Unicode Category**: Strong RTL, Strong LTR, Neutral, etc.
* **Script Classification**: Arabic, Latin, Common, etc.
* **Directional Properties**: How the character affects text flow
* **Position in Algorithm**: Role in bidirectional processing

Arabic OS Text Processing Pipeline
----------------------------------

Step-by-step visualization of the kernel's text processing:

1. **Input Detection**: Character encoding analysis and validation
2. **Character Classification**: Assignment of directional properties
3. **Direction Resolution**: Application of the Unicode Bidirectional Algorithm
4. **Display Output**: Final rendering with proper text flow

Technical Specifications
========================

Unicode Bidirectional Algorithm
-------------------------------

The tool implements key UBA concepts:

**Character Types**:

* **Strong RTL**: Arabic letters (ا, ب, ت, etc.)
* **Strong LTR**: Latin letters (A, B, C, etc.)
* **Weak**: Numbers (0-9, ٠-٩) and some punctuation
* **Neutral**: Spaces, symbols, punctuation marks

**Processing Rules**:

1. **Paragraph Direction**: Determined by first strong character
2. **Run Segmentation**: Text divided into directional runs
3. **Weak Character Resolution**: Numbers and punctuation inherit direction
4. **Neutral Character Resolution**: Symbols follow surrounding text
5. **Level Resolution**: Final ordering based on embedding levels

Arabic Text Direction Rules
---------------------------

Specific rules for Arabic text processing:

.. list-table:: Arabic BiDi Behavior
   :header-rows: 1
   :widths: 25 25 50

   * - Text Type
     - Direction
     - Example
   * - Pure Arabic
     - RTL
     - مرحبا بالعالم
   * - Arabic + Numbers
     - RTL + LTR numbers
     - الصفحة 123
   * - Arabic + Latin
     - RTL + LTR words
     - مرحبا Hello عالم
   * - Technical Terms
     - Context-dependent
     - HTML في صفحة الويب

Mixed Script Processing
-----------------------

Complex scenarios handled by the algorithm:

**Nested Directions**:
```
English sentence with مرحبا Arabic text inside.
```

**Number Processing**:
```
الصفحة 123 من 456 صفحة
```

**Punctuation Handling**:
```
"مرحبا Hello!" قال الرجل.
```

Practical Exercises
===================

Exercise 1: Basic Direction Analysis
------------------------------------

Experiment with simple mixed text:

**Test cases**:
1. "Hello مرحبا"
2. "مرحبا Hello"
3. "Hello مرحبا World"

**Observations to make**:
* How paragraph direction is determined
* Where each word appears visually
* How punctuation behaves
* The role of spaces in direction resolution

Exercise 2: Number and Punctuation
----------------------------------

Analyze how numbers behave in different contexts:

**Test cases**:
1. "Page 123"
2. "الصفحة 123"
3. "Version 2.0 الإصدار 2.0"

**Analysis points**:
* Number direction in LTR vs RTL context
* How punctuation affects direction
* Mixed numbering systems (123 vs ١٢٣)

Exercise 3: Complex Nested Text
-------------------------------

Explore challenging bidirectional scenarios:

**Test cases**:
1. "The word مرحبا means hello"
2. "HTML tags like <div> في البرمجة"
3. "Email: user@domain.com البريد الإلكتروني"

**Advanced concepts**:
* Embedding levels
* Override characters
* Technical term handling

Common BiDi Challenges
=====================

Text Alignment Issues
--------------------

**Problem**: Text doesn't align properly in mixed content

**Causes**:
* Incorrect paragraph direction detection
* CSS direction conflicts
* Missing RTL styling

**Solutions**:

.. code-block:: css

   .bidi-content {
       direction: rtl;
       text-align: right;
       unicode-bidi: bidi-override;
   }

   .ltr-embedded {
       direction: ltr;
       unicode-bidi: embed;
   }

Number Display Problems
----------------------

**Problem**: Numbers appear in wrong positions

**Example**: Instead of "الصفحة 123" showing as intended, it might display incorrectly

**Solutions**:
* Use proper BiDi marks (LRM, RLM)
* Apply CSS direction explicitly
* Consider Unicode directional formatting

.. code-block:: html

   <!-- Force number direction -->
   الصفحة &#x202D;123&#x202C;

Punctuation Confusion
---------------------

**Problem**: Punctuation appears on wrong side of text

**Examples**:
* Question marks in wrong position
* Quotes opening/closing incorrectly

**Solutions**:

.. code-block:: css

   .arabic-text {
       direction: rtl;
   }

   .arabic-text:before {
       content: "«";
   }

   .arabic-text:after {
       content: "»";
   }

Implementation Examples
======================

Web Development
---------------

**HTML with proper BiDi support**:

.. code-block:: html

   <!DOCTYPE html>
   <html lang="ar" dir="rtl">
   <head>
       <meta charset="UTF-8">
       <title>موقع ثنائي الاتجاه</title>
   </head>
   <body>
       <h1>Arabic OS نظام التشغيل العربي</h1>
       <p>This is English text. هذا نص عربي.</p>
   </body>
   </html>

**CSS for mixed content**:

.. code-block:: css

   .mixed-content {
       direction: rtl;
       text-align: start;
       unicode-bidi: plaintext;
   }

   .english-phrase {
       direction: ltr;
       unicode-bidi: embed;
       display: inline;
   }

JavaScript BiDi Detection
-------------------------

**Automatic direction detection**:

.. code-block:: javascript

   function detectTextDirection(text) {
       const rtlChars = /[\u0590-\u08FF]/;
       const ltrChars = /[A-Za-z]/;

       const rtlCount = (text.match(rtlChars) || []).length;
       const ltrCount = (text.match(ltrChars) || []).length;

       if (rtlCount > ltrCount) {
           return 'rtl';
       } else if (ltrCount > rtlCount) {
           return 'ltr';
       }
       return 'auto';
   }

   // Apply direction automatically
   function applyBiDi(element) {
       const text = element.textContent;
       const direction = detectTextDirection(text);
       element.style.direction = direction;
       element.setAttribute('dir', direction);
   }

Database Considerations
-----------------------

**MySQL UTF-8 configuration for BiDi**:

.. code-block:: sql

   CREATE TABLE articles (
       id INT PRIMARY KEY,
       title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
       content LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
       direction ENUM('ltr', 'rtl', 'auto') DEFAULT 'auto'
   );

Arabic OS Integration
====================

Kernel-Level BiDi Support
-------------------------

The Arabic OS kernel provides:

* **Hardware-accelerated BiDi processing**
* **Font shaping for connected Arabic letters**
* **Optimized memory layout for RTL text**
* **System-wide directional consistency**

Terminal and Console
-------------------

Arabic OS terminal features:

* **RTL command prompt support**
* **Mixed-direction file paths**
* **Arabic command aliases**
* **Bidirectional text editing**

File System
-----------

BiDi support throughout the file system:

* **RTL file and folder names**
* **Mixed-script path handling**
* **Proper sorting of Arabic names**
* **Metadata with directional information**

API Reference
=============

For developers working with BiDi text:

**JavaScript BiDi API**:

.. code-block:: javascript

   // Check if text contains RTL characters
   function hasRTLCharacters(text) {
       return /[\u0590-\u08FF]/.test(text);
   }

   // Get paragraph direction
   function getParagraphDirection(text) {
       const firstStrong = text.match(/[\u0590-\u08FF\u0041-\u005A\u0061-\u007A]/);
       if (firstStrong) {
           return /[\u0590-\u08FF]/.test(firstStrong[0]) ? 'rtl' : 'ltr';
       }
       return 'neutral';
   }

   // Apply BiDi formatting
   function formatBiDiText(text, options = {}) {
       return {
           text: text,
           direction: options.direction || getParagraphDirection(text),
           hasRTL: hasRTLCharacters(text),
           processedText: applyBiDiAlgorithm(text)
       };
   }

**Python BiDi Processing**:

.. code-block:: python

   import unicodedata
   from bidi.algorithm import get_display

   def analyze_bidi_text(text):
       """Analyze bidirectional properties of text."""
       rtl_chars = sum(1 for c in text if unicodedata.bidirectional(c) in ['R', 'AL'])
       ltr_chars = sum(1 for c in text if unicodedata.bidirectional(c) == 'L')

       return {
           'original': text,
           'display': get_display(text),
           'rtl_chars': rtl_chars,
           'ltr_chars': ltr_chars,
           'direction': 'rtl' if rtl_chars > ltr_chars else 'ltr'
       }

Performance Considerations
=========================

BiDi Algorithm Optimization
---------------------------

Best practices for efficient BiDi processing:

1. **Cache Results**: Store processed text for repeated use
2. **Segment Processing**: Handle long texts in chunks
3. **Early Detection**: Quick RTL/LTR classification
4. **Lazy Evaluation**: Process only visible text portions

Memory Management
-----------------

RTL text requires special memory considerations:

* **Buffer Allocation**: Account for reordering overhead
* **Cache Efficiency**: Optimize for BiDi access patterns
* **Garbage Collection**: Manage temporary reordering arrays

Real-World Applications
======================

Content Management Systems
--------------------------

BiDi considerations for CMS development:

* **Editor interfaces** that handle mixed content
* **Template systems** with automatic direction detection
* **Search functionality** that works across scripts
* **URL handling** for RTL domain names

Social Media Platforms
---------------------

Challenges in social media BiDi support:

* **User-generated content** with unpredictable mixing
* **Hashtags and mentions** in mixed scripts
* **Reply threading** with varying directions
* **Embedded media** with BiDi captions

E-commerce Applications
----------------------

BiDi requirements for online stores:

* **Product names** in multiple scripts
* **Pricing** with appropriate number formatting
* **Address fields** supporting RTL input
* **Review systems** handling mixed-language content

Integration with Other Tools
============================

This BiDi demo complements other Arabic OS tools:

* Start with :doc:`utf8-visualizer` to understand character encoding
* Use :doc:`arabic-typing` to explore input methods
* Continue to :doc:`font-renderer` for display rendering details
* Advanced users can explore :doc:`assembly-simulator` for low-level implementation

Understanding bidirectional text processing is essential for creating truly multilingual applications. This demo provides hands-on experience with the algorithms and challenges involved in RTL/LTR text coexistence.

Further Learning
================

Continue your BiDi journey with:

* :doc:`font-renderer` - How fonts handle bidirectional text
* :doc:`arabic-typing` - Input methods for RTL languages
* :doc:`../../../tutorials/advanced/bidi-algorithm` - Deep dive into UBA implementation
* :doc:`../../../developer-guide/api/text-rendering` - System-level BiDi APIs

Master bidirectional text concepts with this demo before tackling more advanced Arabic text processing challenges.