window.content = {
    // Page metadata
    pageTitle: "Memory Layout Visualizer - Arabic OS",

    // Header section
    headerTitle: "🧠 Memory Layout Visualizer",
    headerDescription: "Interactive Arabic OS memory map with real-time allocation simulation",

    // Navigation
    backToHome: "← Back to Interactive Tools",

    // Main sections
    memoryConfiguration: "Memory Configuration",
    arabicOsMemoryMap: "Arabic OS Memory Map",
    memoryStatistics: "Memory Statistics",

    // Preset configurations
    presets: {
        defaultArabicOS: "Default Arabic OS",
        minimal: "Minimal (1MB)",
        desktop: "Desktop (16MB)",
        server: "Server (64MB)",
        embedded: "Embedded (512KB)"
    },

    // Navigation
    navigation: {
        backToLearning: "← Back to Interactive Learning Platform"
    },

    // Configuration controls
    controls: {
        totalMemoryLabel: "Total Memory (KB)",
        kernelSizeLabel: "Kernel Size (KB)",
        pageSizeLabel: "Page Size (bytes)",
        allocationStrategyLabel: "Allocation Strategy",
        strategyOptions: {
            firstFit: "First Fit",
            bestFit: "Best Fit",
            worstFit: "Worst Fit",
            nextFit: "Next Fit"
        }
    },

    // Memory regions legend
    regions: {
        memoryRegionsTitle: "Memory Regions",
        kernelSpace: "Kernel Space",
        userSpace: "User Space",
        freeMemory: "Free Memory",
        allocated: "Allocated",
        reserved: "Reserved",
        vgaMemory: "VGA Memory",
        lowMemory: "Low Memory"
    },

    // Selection info
    selection: {
        currentSelectionTitle: "Current Selection",
        regionLabel: "Region:",
        addressLabel: "Address:",
        sizeLabel: "Size:",
        pagesLabel: "Pages:",
        startLabel: "Start:",
        endLabel: "End:",
        noneSelected: "None",
        noSelection: "-"
    },

    // Simulation controls
    simulation: {
        memorySimulationTitle: "Memory Simulation",
        alloc1Page: "Alloc 1 Page",
        alloc4Pages: "Alloc 4 Pages",
        alloc16Pages: "Alloc 16 Pages",
        freeRandom: "Free Random",
        resetAll: "Reset All",
        allocStatusLabel: "Allocation Status:",
        readyStatus: "Ready for allocation"
    },

    // Statistics
    statistics: {
        totalMemory: "Total Memory",
        kernelMemory: "Kernel Space",
        userMemory: "User Space",
        freeMemoryStats: "Free Memory",
        totalPages: "Total Pages",
        freePages: "Free Pages"
    },

    // Status messages
    messages: {
        allocationSuccess: "Successfully allocated",
        allocationFailed: "Allocation failed: Not enough free memory",
        memoryFreed: "Freed",
        memoryReset: "All allocations reset",
        pages: "pages",
        at: "at",
        ready: "Ready for allocation"
    },

    // Memory region names (used in JavaScript)
    regionNames: {
        lowMemoryDos: "Low Memory (DOS/BIOS)",
        vgaMemory: "VGA Memory",
        arabicOsKernel: "Arabic OS Kernel",
        userSpace: "User Space"
    },

    // Tooltips and help text
    tooltips: {
        totalMemoryHelp: "Total system memory in kilobytes",
        kernelSizeHelp: "Size of the kernel space in kilobytes",
        pageSizeHelp: "Memory page size in bytes (typically 4096)",
        allocationHelp: "Memory allocation strategy for managing free space",
        memoryMapHelp: "Visual representation of memory layout and allocations",
        regionClickHelp: "Click on memory regions to view details",
        simulationHelp: "Use simulation controls to allocate and free memory blocks"
    },

    // Error messages
    errors: {
        configError: "Configuration error",
        memoryFull: "Memory full",
        invalidSize: "Invalid memory size",
        allocationError: "Allocation error"
    }
};