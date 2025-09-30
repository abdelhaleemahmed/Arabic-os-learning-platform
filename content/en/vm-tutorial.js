window.content = {
    // Page metadata
    pageTitle: "VM Setup Tutorial - Arabic OS",

    // Navigation
    navigation: {
        backToHome: "← Back to Home",
        vmTutorial: "Virtual Machine Setup Tutorial"
    },

    // Hero section
    hero: {
        title: "🖥️ Virtual Machine Setup Tutorial",
        subtitle: "Complete guide to running Arabic OS on popular virtualization platforms",
        description: "Learn how to set up and configure virtual machines using VirtualBox, QEMU, Bochs, and VMware Workstation to boot and run the Arabic Operating System from the floppy disk image."
    },

    // System Requirements
    requirements: {
        title: "📋 System Requirements",
        general: {
            title: "General Requirements",
            cpu: "x86 or x64 processor",
            ram: "At least 2GB RAM available",
            storage: "50MB free disk space",
            os: "Windows, macOS, or Linux host OS"
        },
        files: {
            title: "Required Files",
            floppy: "Arabic OS floppy image (floppy.flp)",
            vm: "Virtualization software installed",
            vt: "Hardware virtualization enabled (VT-x/AMD-V)"
        },
        knowledge: {
            title: "Recommended Knowledge",
            basic: "Basic computer operation",
            vm: "Understanding of virtual machines",
            bios: "BIOS/UEFI configuration (optional)"
        }
    },

    // Quick Navigation
    quickNav: {
        title: "🚀 Choose Your Platform",
        virtualbox: {
            title: "🔵 VirtualBox",
            difficulty: "Easy",
            description: "Free, cross-platform, beginner-friendly"
        },
        qemu: {
            title: "⚡ QEMU",
            difficulty: "Medium",
            description: "Lightweight, command-line based, fast"
        },
        vmware: {
            title: "🔶 VMware Workstation",
            difficulty: "Easy",
            description: "Professional, feature-rich, paid"
        },
        bochs: {
            title: "🔧 Bochs",
            difficulty: "Advanced",
            description: "Debug-focused, detailed emulation"
        }
    },

    // Tutorials
    tutorials: {
        virtualbox: {
            title: "VirtualBox Setup",
            subtitle: "Oracle VirtualBox - Free and user-friendly",
            info: {
                title: "Why VirtualBox?",
                description: "VirtualBox is perfect for beginners. It's free, has an intuitive GUI, and works on all major operating systems."
            },
            step1: {
                title: "Download and Install VirtualBox",
                description: "Download VirtualBox from the official website and install it on your system.",
                warning: "Make sure to enable hardware virtualization (VT-x/AMD-V) in your BIOS if it's disabled."
            },
            step2: {
                title: "Create a New Virtual Machine",
                description: "Create a new VM with the following specifications:",
                name: "Name: Arabic OS",
                type: "Type: Other",
                version: "Version: DOS",
                memory: "Memory: 32 MB (minimum 16 MB)",
                hdd: "Hard Disk: Do not add a virtual hard disk"
            },
            step3: {
                title: "Configure VM Settings",
                description: "Right-click the VM and select \"Settings\". Configure:",
                storage: "Storage: Add floppy controller and attach floppy.flp",
                display: "Display: Video Memory: 16 MB, Graphics Controller: VBoxVGA",
                boot: "System → Boot Order: Floppy first, then disable others"
            },
            step4: {
                title: "Boot the Arabic OS",
                description: "Click \"Start\" to boot the VM. You should see the Arabic OS loading from the floppy disk.",
                success: "Success! Your Arabic OS should now be running in VirtualBox."
            }
        },
        qemu: {
            title: "QEMU Setup",
            subtitle: "Fast, lightweight command-line emulator",
            info: {
                title: "Why QEMU?",
                description: "QEMU is lightweight, fast, and perfect for testing operating systems. It requires minimal setup and system resources."
            },
            step1: {
                title: "Install QEMU",
                description: "Install QEMU on your system:"
            },
            step2: {
                title: "Prepare the Floppy Image",
                description: "Place the floppy.flp file in an accessible directory and open a terminal/command prompt in that location."
            },
            step3: {
                title: "Boot the Arabic OS",
                description: "Use the following command to boot the Arabic OS:",
                options: "Optional parameters for better experience:"
            },
            step4: {
                title: "QEMU Controls",
                description: "Useful QEMU keyboard shortcuts:",
                ctrl1: "Ctrl+Alt+1: Switch to VM console",
                ctrl2: "Ctrl+Alt+2: Switch to QEMU monitor",
                ctrlaltf: "Ctrl+Alt+F: Toggle fullscreen",
                ctrlaltq: "Ctrl+Alt+Q: Quit QEMU"
            }
        },
        vmware: {
            title: "VMware Workstation Setup",
            subtitle: "Professional virtualization solution",
            info: {
                title: "Why VMware?",
                description: "VMware Workstation offers professional-grade virtualization with excellent performance and advanced features."
            },
            step1: {
                title: "Install VMware Workstation",
                description: "Download and install VMware Workstation Pro from the official website.",
                warning: "VMware Workstation is commercial software. A free trial is available, and there's also VMware Workstation Player (free for personal use)."
            },
            step2: {
                title: "Create New Virtual Machine",
                description: "Follow the New Virtual Machine Wizard:",
                config: "Configuration: Custom (advanced)",
                compat: "Compatibility: Latest Workstation version",
                source: "Guest OS Source: I will install the operating system later",
                guest: "Guest OS: Other → DOS",
                name: "Name: Arabic OS",
                memory: "Memory: 32 MB"
            },
            step3: {
                title: "Configure Floppy Drive",
                description: "Edit VM settings to add the floppy disk:",
                add: "Add Hardware: Floppy Drive",
                image: "Connection: Use floppy image file",
                browse: "Browse: Select floppy.flp file",
                connect: "Device Status: Connect at power on"
            },
            step4: {
                title: "Set Boot Order",
                description: "Configure the VM to boot from floppy:",
                options: "VM Settings: Options tab",
                advanced: "Advanced: Boot Options",
                firmware: "Firmware Type: BIOS",
                delay: "Boot Delay: 3 seconds (to access boot menu if needed)"
            },
            step5: {
                title: "Power On and Boot",
                description: "Click \"Power on this virtual machine\" to start the Arabic OS.",
                success: "The Arabic OS should boot successfully in VMware Workstation."
            }
        },
        bochs: {
            title: "Bochs Setup",
            subtitle: "Detailed x86 PC emulator for debugging",
            info: {
                title: "Why Bochs?",
                description: "Bochs provides the most detailed emulation and debugging capabilities, perfect for OS development and understanding low-level operations."
            },
            step1: {
                title: "Install Bochs",
                description: "Download and install Bochs:"
            },
            step2: {
                title: "Create Bochs Configuration",
                description: "Create a configuration file named 'bochsrc.txt':"
            },
            step3: {
                title: "Prepare Files",
                description: "Ensure both files are in the same directory:",
                floppy: "floppy.flp (Arabic OS image)",
                config: "bochsrc.txt (configuration file)"
            },
            step4: {
                title: "Run Bochs",
                description: "Start Bochs with the configuration:",
                warning: "Bochs may be slower than other emulators but provides excellent debugging information."
            },
            step5: {
                title: "Debugging Features",
                description: "Bochs offers powerful debugging capabilities:",
                debugger: "Built-in Debugger: Step through code instruction by instruction",
                breakpoints: "Breakpoints: Set breakpoints at specific memory addresses",
                memory: "Memory Inspection: View and modify memory contents",
                registers: "Register Monitoring: Real-time CPU register values"
            }
        }
    },

    // FAQ Section
    faq: {
        title: "❓ Frequently Asked Questions",
        q1: {
            question: "What if the Arabic OS doesn't boot?",
            answer: "Ensure that: 1) The floppy image file is not corrupted, 2) Boot order is set to floppy first, 3) Floppy drive is properly connected in VM settings, 4) VM has sufficient memory allocated (minimum 16MB)."
        },
        q2: {
            question: "Can I run this on real hardware?",
            answer: "Yes! You can write the floppy image to a physical floppy disk or USB drive (with proper tools) and boot from real x86 hardware. Make sure the target hardware supports floppy boot or USB legacy boot."
        },
        q3: {
            question: "Which emulator is best for beginners?",
            answer: "VirtualBox is recommended for beginners due to its user-friendly GUI and extensive documentation. QEMU is great for quick testing, while Bochs is ideal for development and debugging."
        },
        q4: {
            question: "Why does the OS look different in each emulator?",
            answer: "Different emulators may have slightly different video card emulations, timing, and hardware configurations. The core functionality should remain the same, but visual presentation might vary slightly."
        },
        q5: {
            question: "How can I take screenshots or record the session?",
            answer: "Most emulators support screenshots: VirtualBox (Host+E), VMware (VM menu → Capture Screen), QEMU (monitor command 'screendump'), Bochs (built-in screenshot feature). You can also use external screen recording software."
        }
    },

    // Call to Action
    cta: {
        title: "🚀 Ready to Experience Arabic Computing?",
        description: "Choose your preferred virtualization platform above and start exploring the Arabic Operating System. Each method offers a unique way to experience Arabic computing innovation.",
        aboutOS: "Learn About Arabic OS",
        interactiveTools: "Try Interactive Tools"
    }
};