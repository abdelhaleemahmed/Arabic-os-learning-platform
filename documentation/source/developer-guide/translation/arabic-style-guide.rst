Arabic Style Guide
==================

This comprehensive style guide ensures consistent, high-quality Arabic translations across all Arabic OS Platform documentation. It addresses technical terminology, cultural sensitivity, and linguistic standards specific to Arabic technical writing.

Translation Philosophy
======================

Our Arabic translations serve the educational mission of making Arabic computing concepts accessible to native Arabic speakers. We prioritize:

**Cultural Authenticity**
   Translations respect Arabic language conventions and cultural context while maintaining technical precision.

**Educational Clarity**
   Content supports learning at all levels, from beginners to advanced practitioners.

**Technical Accuracy**
   Complex technical concepts are translated with precision, maintaining their intended meaning.

**Professional Quality**
   Documentation meets international standards for technical communication in Arabic.

Arabic Language Standards
==========================

Script and Typography
---------------------

**Arabic Script Requirements:**

- **Primary Font**: Amiri (for traditional Arabic text)
- **Secondary Font**: Noto Sans Arabic (for modern technical content)
- **Character Set**: Full Unicode Arabic support (U+0600-U+06FF)
- **Diacritics**: Use sparingly, only for disambiguation
- **Numerals**: Use Arabic-Indic numerals (٠١٢٣٤٥٦٧٨٩) for Arabic context, Western numerals (0123456789) for technical specifications

**Typography Guidelines:**

.. code-block:: css

   /* Recommended CSS for Arabic content */
   .arabic-text {
       font-family: 'Amiri', 'Noto Sans Arabic', serif;
       direction: rtl;
       text-align: right;
       line-height: 1.8;
       font-size: 1.1em;
   }

   .technical-arabic {
       font-family: 'Noto Sans Arabic', sans-serif;
       direction: rtl;
       text-align: right;
       line-height: 1.6;
   }

Right-to-Left (RTL) Considerations
----------------------------------

**Text Flow:**
- All Arabic content flows right-to-left
- Mixed content (Arabic with English technical terms) maintains RTL base direction
- Code examples and technical diagrams may use LTR embedding

**Punctuation:**
- Use Arabic punctuation marks: ، (comma), ؛ (semicolon), ؟ (question mark)
- Maintain RTL punctuation rules (space before, not after)
- Technical symbols (like parentheses) follow context direction

**Example:**

.. code-block:: text

   ❌ Wrong: ما هو CP1256 ?
   ✅ Correct: ما هو CP1256؟

   ❌ Wrong: يستخدم النظام( ويندوز - 1256) للترميز
   ✅ Correct: يستخدم النظام (ويندوز-١٢٥٦) للترميز

Technical Terminology
======================

Standardized Technical Terms
----------------------------

**Character Encoding Terms:**

.. list-table:: Character Encoding Terminology
   :header-rows: 1
   :widths: 30 35 35

   * - English Term
     - Arabic Translation
     - Usage Notes
   * - Character Encoding
     - ترميز الأحرف
     - Standard term, well established
   * - Code Point
     - نقطة الرمز / رمز الموضع
     - Use "نقطة الرمز" for Unicode contexts
   * - Byte
     - بايت
     - Borrowed term, widely understood
   * - Bit
     - بت / خانة ثنائية
     - Use "بت" in technical contexts
   * - ASCII
     - أسكي / ASCII
     - Keep acronym, add Arabic pronunciation
   * - Unicode
     - يونيكود / Unicode
     - Keep original term, it's globally recognized
   * - UTF-8
     - UTF-8
     - Acronym preserved, explain in parentheses

**Operating System Terms:**

.. list-table:: Operating System Terminology
   :header-rows: 1
   :widths: 30 35 35

   * - English Term
     - Arabic Translation
     - Usage Notes
   * - Operating System
     - نظام التشغيل
     - Standard Arabic computing term
   * - Kernel
     - النواة
     - Well-established translation
   * - Process
     - عملية
     - Standard term in Arabic computing
   * - Thread
     - خيط معالجة / مسار فرعي
     - Context-dependent choice
   * - Memory
     - الذاكرة
     - Standard term
   * - Buffer
     - منطقة تخزين مؤقت / مخزن مؤقت
     - Use shorter form in repeated contexts
   * - Cache
     - ذاكرة تخزين مؤقت / كاش
     - Technical context determines choice

**Arabic Computing Terms:**

.. list-table:: Arabic-Specific Technical Terms
   :header-rows: 1
   :widths: 30 35 35

   * - English Term
     - Arabic Translation
     - Usage Notes
   * - Bidirectional Text
     - النص ثنائي الاتجاه
     - Standard Arabic linguistics term
   * - Right-to-Left
     - من اليمين إلى اليسار / RTL
     - Use abbreviation in technical contexts
   * - Arabic Script
     - الخط العربي / الكتابة العربية
     - "الخط العربي" preferred
   * - Diacritics
     - الحركات / التشكيل
     - "التشكيل" more common
   * - Ligature
     - الربط / الحرف المركب
     - Context-dependent
   * - Shaping
     - تشكيل الأحرف / تكوين الحروف
     - Technical rendering context

Terminology Consistency Rules
-----------------------------

**Rule 1: First Occurrence Definition**

When introducing technical terms, provide both Arabic and English:

.. code-block:: text

   ✅ Good:
   يستخدم ترميز الأحرف (Character Encoding) نظام CP1256 لتمثيل النصوص العربية.

   ❌ Avoid:
   يستخدم Character Encoding نظام CP1256 لتمثيل النصوص العربية.

**Rule 2: Established Terms Priority**

Use widely accepted Arabic terms over literal translations:

.. code-block:: text

   ✅ Preferred: المتصفح (browser)
   ❌ Avoid: متصفح الإنترنت (internet browser)

   ✅ Preferred: البرنامج (software/program)
   ❌ Avoid: الكيان البرمجي (programmatic entity)

**Rule 3: Context-Appropriate Register**

Match formality level to content type:

.. code-block:: text

   📚 Educational Content:
   "سنتعلم في هذا القسم كيفية استخدام..."

   🔧 Technical Reference:
   "يقوم هذا الإجراء بتنفيذ..."

   📋 User Interface:
   "انقر هنا لبدء العملية"

Cultural and Regional Considerations
====================================

Arabic Language Variants
-------------------------

**Modern Standard Arabic (MSA) Priority**

All translations use Modern Standard Arabic as the primary register:

- **Formal but accessible** language level
- **Avoiding excessive classical forms** that hinder comprehension
- **Including contemporary technical vocabulary**
- **Maintaining clarity** for diverse Arabic-speaking regions

**Regional Sensitivity**

While using MSA, consider regional preferences:

.. list-table:: Regional Term Variations
   :header-rows: 1
   :widths: 25 25 25 25

   * - Concept
     - Gulf/Saudi
     - Levant/Egypt
     - Maghreb
   * - Computer
     - حاسوب
     - كمبيوتر
     - حاسوب
   * - Software
     - برنامج
     - برنامج
     - برمجية
   * - Email
     - بريد إلكتروني
     - إيميل
     - بريد إلكتروني
   * - Download
     - تنزيل
     - تحميل
     - تنزيل

**Recommended Approach**: Use the most widely understood term, with regional variants in glossary.

Cultural Context Adaptation
---------------------------

**Educational Context**

Adapt examples and scenarios to Arabic cultural context:

.. code-block:: text

   ❌ Cultural Mismatch:
   "Enter your first name, like 'John' or 'Mary'"

   ✅ Culturally Appropriate:
   "أدخل اسمك الأول، مثل 'أحمد' أو 'فاطمة'"

**Technical Examples**

Use Arabic-relevant examples while maintaining technical accuracy:

.. code-block:: text

   ❌ Generic:
   "Process the file 'document.txt'"

   ✅ Arabic Context:
   "معالجة الملف 'الوثيقة.txt'"

**Time and Date Formats**

Consider Arabic calendar and cultural preferences:

.. code-block:: text

   📅 International Context:
   "January 15, 2025" → "١٥ يناير ٢٠٢٥"

   🗓️ Cultural Context:
   Include Hijri equivalent when appropriate
   "١٥ يناير ٢٠٢٥ (٧ رجب ١٤٤٦)"

Writing Style Guidelines
========================

Tone and Voice
--------------

**Educational Tone**

Maintain an encouraging, supportive tone appropriate for learners:

.. code-block:: text

   ✅ Encouraging:
   "ستتمكن من فهم هذا المفهوم بسهولة من خلال الأمثلة التفاعلية"

   ❌ Intimidating:
   "يجب عليك إتقان هذه المفاهيم المعقدة قبل المتابعة"

**Professional Voice**

Balance formality with accessibility:

.. code-block:: text

   ✅ Professional but Accessible:
   "يوفر هذا النظام طريقة فعالة لمعالجة النصوص العربية"

   ❌ Too Formal:
   "إن هذا النظام ليوفر منهجية عالية الكفاءة لمعالجة المحتوى النصي العربي"

   ❌ Too Casual:
   "هاي الطريقة حلوة كتير للتعامل مع النصوص العربية"

Sentence Structure
-----------------

**Clarity Priority**

Favor clear, straightforward sentence structures:

.. code-block:: text

   ✅ Clear:
   "يستخدم CP1256 بايت واحد لتمثيل كل حرف"

   ❌ Complex:
   "إن نظام الترميز CP1256، والذي يعتبر من الأنظمة القديمة، يستخدم..."

**Active Voice Preference**

Use active voice when possible:

.. code-block:: text

   ✅ Active:
   "ينفذ النظام هذه العملية تلقائياً"

   ❌ Passive:
   "يتم تنفيذ هذه العملية من قبل النظام تلقائياً"

**Parallel Structure**

Maintain consistency in lists and instructions:

.. code-block:: text

   ✅ Parallel:
   "١. افتح الملف
   ٢. اختر الترميز
   ٣. احفظ التغييرات"

   ❌ Inconsistent:
   "١. فتح الملف
   ٢. يجب اختيار الترميز
   ٣. قم بحفظ التغييرات"

Formatting and Presentation
============================

Arabic Text Layout
-------------------

**Paragraph Direction**

.. code-block:: html

   <!-- Correct Arabic paragraph -->
   <p dir="rtl" lang="ar" class="arabic-text">
   هذا مثال على فقرة عربية صحيحة التنسيق
   </p>

**Mixed Content Handling**

.. code-block:: text

   ✅ Correct Mixed Content:
   "يستخدم نظام CP1256 ترميزاً أحادي البايت"

   ❌ Incorrect Direction:
   "CP1256 يستخدم نظام ترميزاً أحادي البايت"

Code Examples in Arabic Context
-------------------------------

**Code Comments Translation**

.. code-block:: javascript

   // English version
   function encodeText(text) {
       // Convert text to CP1256 encoding
       return cp1256.encode(text);
   }

   // Arabic version
   function encodeText(text) {
       // تحويل النص إلى ترميز CP1256
       return cp1256.encode(text);
   }

**Variable Names Policy**

Keep English variable names but translate comments and documentation:

.. code-block:: javascript

   ✅ Recommended:
   const arabicText = "مرحباً"; // النص العربي

   ❌ Avoid:
   const النص_العربي = "مرحباً"; // May cause technical issues

Lists and Tables
----------------

**Numbered Lists**

Use Arabic-Indic numerals in Arabic context:

.. code-block:: text

   ✅ Arabic Context:
   ١. الخطوة الأولى
   ٢. الخطوة الثانية
   ٣. الخطوة الثالثة

   ✅ Technical Context:
   1. خطوة رقم واحد (Step 1)
   2. خطوة رقم اثنين (Step 2)
   3. خطوة رقم ثلاثة (Step 3)

**Table Headers**

Ensure proper RTL alignment:

.. list-table:: مثال على جدول عربي صحيح
   :header-rows: 1
   :align: right

   * - المصطلح العربي
     - المصطلح الإنجليزي
     - الملاحظات
   * - ترميز الأحرف
     - Character Encoding
     - مصطلح قياسي

Quality Assurance Checklist
============================

**Pre-Translation Review**

.. code-block:: text

   □ Source text context understood
   □ Technical terms identified
   □ Audience level appropriate
   □ Cultural considerations noted

**Translation Quality Check**

.. code-block:: text

   □ Arabic grammar and syntax correct
   □ Technical accuracy preserved
   □ Terminology consistency maintained
   □ Cultural appropriateness verified
   □ RTL formatting applied correctly

**Post-Translation Validation**

.. code-block:: text

   □ Build testing successful
   □ Visual layout verification
   □ Cross-reference accuracy
   □ Link functionality confirmed
   □ Search functionality tested

Common Translation Challenges
=============================

Technical Term Ambiguity
------------------------

**Challenge**: English technical terms with multiple possible Arabic translations

**Solution Process**:

1. **Research existing usage** in Arabic technical literature
2. **Consult established glossaries** (IEEE, ISO Arabic standards)
3. **Consider context** (academic vs. professional vs. general)
4. **Document decision** in project glossary
5. **Maintain consistency** across all documentation

**Example Resolution**:

.. code-block:: text

   Term: "Buffer"

   Context Analysis:
   - Computer Memory: "مخزن مؤقت" or "منطقة تخزين مؤقت"
   - Data Processing: "حاجز" or "مصدات"

   Decision: "مخزن مؤقت" for memory contexts
   Rationale: Widely used in Arabic computing literature

   Documentation: Add to project glossary with context notes

Mixed Language Text Flow
------------------------

**Challenge**: English technical terms within Arabic sentences

**Guidelines**:

1. **Maintain Arabic sentence flow** as primary
2. **Embed English terms** naturally within Arabic context
3. **Provide Arabic explanation** on first occurrence
4. **Use parenthetical clarification** when needed

.. code-block:: text

   ✅ Good Integration:
   "يستخدم بروتوكول HTTP (نقل النص التشعبي) لتبادل البيانات"

   ❌ Poor Integration:
   "HTTP يستخدم بروتوكول لتبادل البيانات النص التشعبي"

Cultural Sensitivity Balance
---------------------------

**Challenge**: Balancing cultural adaptation with technical accuracy

**Approach**:

1. **Prioritize technical accuracy** while respecting cultural context
2. **Adapt examples and scenarios** to Arabic cultural context
3. **Maintain educational objectivity** while being culturally sensitive
4. **Consult cultural experts** for sensitive topics

**Best Practices**:

.. code-block:: text

   🎯 Technical Focus:
   "يستخدم هذا الخوارزم طريقة فعالة لمعالجة البيانات"

   🌍 Cultural Adaptation:
   "مثال: معالجة النصوص العربية في المراسلات الرسمية"

   ⚖️ Balanced Approach:
   "يستخدم هذا الخوارزم طريقة فعالة لمعالجة البيانات، كما في معالجة النصوص العربية للمراسلات الرسمية"

Style Guide Maintenance
=======================

**Living Document Philosophy**

This style guide evolves with:

- **Arabic language development** in technical contexts
- **Community feedback** from translators and users
- **Technical advancement** in Arabic computing
- **Educational best practices** research

**Update Process**

1. **Quarterly Review** of terminology decisions
2. **Community Input** collection and evaluation
3. **Expert Consultation** with Arabic linguistics professionals
4. **Version Control** of style guide changes
5. **Translator Training** on updated guidelines

**Feedback Integration**

Submit style guide suggestions through:

- **GitHub Issues** for terminology discussions
- **Translator Forum** for community input
- **Expert Panel** for complex linguistic questions
- **User Feedback** for accessibility improvements

This comprehensive Arabic Style Guide ensures our translations serve the global Arabic-speaking community with culturally respectful, technically accurate, and educationally effective content.