window.content = {
    // Page metadata
    pageTitle: "مصور تخطيط الذاكرة - نظام التشغيل العربي",

    // Header section
    headerTitle: "🧠 مصور تخطيط الذاكرة",
    headerDescription: "خريطة ذاكرة تفاعلية لنظام التشغيل العربي مع محاكاة التخصيص الفوري",

    // Navigation
    backToHome: "← العودة إلى الأدوات التفاعلية",

    // Main sections
    memoryConfiguration: "إعداد الذاكرة",
    arabicOsMemoryMap: "خريطة ذاكرة نظام التشغيل العربي",
    memoryStatistics: "إحصائيات الذاكرة",

    // Preset configurations
    presets: {
        defaultArabicOS: "نظام التشغيل العربي الافتراضي",
        minimal: "الحد الأدنى (1 ميجابايت)",
        desktop: "سطح المكتب (16 ميجابايت)",
        server: "الخادم (64 ميجابايت)",
        embedded: "المدمج (512 كيلوبايت)"
    },

    // Navigation
    navigation: {
        backToLearning: "← العودة إلى منصة التعلم التفاعلية"
    },

    // Configuration controls
    controls: {
        totalMemoryLabel: "إجمالي الذاكرة (كيلوبايت)",
        kernelSizeLabel: "حجم النواة (كيلوبايت)",
        pageSizeLabel: "حجم الصفحة (بايت)",
        allocationStrategyLabel: "استراتيجية التخصيص",
        strategyOptions: {
            firstFit: "الملائمة الأولى",
            bestFit: "أفضل ملائمة",
            worstFit: "أسوأ ملائمة",
            nextFit: "الملائمة التالية"
        }
    },

    // Memory regions legend
    regions: {
        memoryRegionsTitle: "مناطق الذاكرة",
        kernelSpace: "مساحة النواة",
        userSpace: "مساحة المستخدم",
        freeMemory: "ذاكرة حرة",
        allocated: "مخصص",
        reserved: "محجوز",
        vgaMemory: "ذاكرة VGA",
        lowMemory: "الذاكرة المنخفضة"
    },

    // Selection info
    selection: {
        currentSelectionTitle: "التحديد الحالي",
        regionLabel: "المنطقة:",
        addressLabel: "العنوان:",
        sizeLabel: "الحجم:",
        pagesLabel: "الصفحات:",
        startLabel: "البداية:",
        endLabel: "النهاية:",
        noneSelected: "لا يوجد",
        noSelection: "-"
    },

    // Simulation controls
    simulation: {
        memorySimulationTitle: "محاكاة الذاكرة",
        alloc1Page: "تخصيص صفحة واحدة",
        alloc4Pages: "تخصيص 4 صفحات",
        alloc16Pages: "تخصيص 16 صفحة",
        freeRandom: "تحرير عشوائي",
        resetAll: "إعادة تعيين الكل",
        allocStatusLabel: "حالة التخصيص:",
        readyStatus: "جاهز للتخصيص"
    },

    // Statistics
    statistics: {
        totalMemory: "إجمالي الذاكرة",
        kernelMemory: "مساحة النواة",
        userMemory: "مساحة المستخدم",
        freeMemoryStats: "الذاكرة الحرة",
        totalPages: "إجمالي الصفحات",
        freePages: "الصفحات الحرة"
    },

    // Status messages
    messages: {
        allocationSuccess: "تم التخصيص بنجاح",
        allocationFailed: "فشل التخصيص: لا توجد ذاكرة حرة كافية",
        memoryFreed: "تم التحرير",
        memoryReset: "تم إعادة تعيين جميع التخصيصات",
        pages: "صفحات",
        at: "في",
        ready: "جاهز للتخصيص"
    },

    // Memory region names (used in JavaScript)
    regionNames: {
        lowMemoryDos: "الذاكرة المنخفضة (DOS/BIOS)",
        vgaMemory: "ذاكرة VGA",
        arabicOsKernel: "نواة نظام التشغيل العربي",
        userSpace: "مساحة المستخدم"
    },

    // Tooltips and help text
    tooltips: {
        totalMemoryHelp: "إجمالي ذاكرة النظام بالكيلوبايت",
        kernelSizeHelp: "حجم مساحة النواة بالكيلوبايت",
        pageSizeHelp: "حجم صفحة الذاكرة بالبايت (عادة 4096)",
        allocationHelp: "استراتيجية تخصيص الذاكرة لإدارة المساحة الحرة",
        memoryMapHelp: "تمثيل مرئي لتخطيط الذاكرة والتخصيصات",
        regionClickHelp: "انقر على مناطق الذاكرة لعرض التفاصيل",
        simulationHelp: "استخدم عناصر التحكم في المحاكاة لتخصيص وتحرير كتل الذاكرة"
    },

    // Error messages
    errors: {
        configError: "خطأ في الإعداد",
        memoryFull: "الذاكرة ممتلئة",
        invalidSize: "حجم ذاكرة غير صالح",
        allocationError: "خطأ في التخصيص"
    }
};