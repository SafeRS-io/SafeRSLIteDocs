// SafeRS Lite Documentation JavaScript

// Function to check if all sections are collapsed and scroll to top if needed
function checkAllSectionsCollapsed() {
    const sections = [
        'showcase-content',
        'config-content',
        'template-content', 
        'api-content',
        'libraries-content',
        'features-content',
        'examples-content'
    ];
    
    const allCollapsed = sections.every(sectionId => {
        const element = document.getElementById(sectionId);
        return element && element.style.display === 'none';
    });
    
    if (allCollapsed) {
        // Smooth scroll to top of the page
        setTimeout(() => {
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        }, 100);
    }
}

// Function to scroll content to position just below header
function scrollContentBelowHeader(contentElement) {
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 80; // fallback to 80px if header not found
    const contentRect = contentElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate position to place content just below header with minimal padding
    const targetPosition = contentRect.top + scrollTop - headerHeight - 80;
    
    setTimeout(() => {
        window.scrollTo({ 
            top: Math.max(0, targetPosition), 
            behavior: 'smooth' 
        });
    }, 100);
}

// Initialize all event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Make section titles clickable - Showcase toggle
    const showcaseH2 = document.querySelector('#showcase-toggle').closest('h2');
    showcaseH2.addEventListener('click', function() {
        const content = document.getElementById('showcase-content');
        const toggle = document.getElementById('showcase-toggle');
        
        if (content.style.display === 'none') {
            content.style.display = 'block';
            toggle.textContent = '[Click to collapse]';
            // Scroll to position content just below header
            scrollContentBelowHeader(content);
        } else {
            content.style.display = 'none';
            toggle.textContent = '[Click to expand]';
            // Check if all sections are collapsed and scroll to top if needed
            setTimeout(() => {
                checkAllSectionsCollapsed();
            }, 100);
        }
    });

    // Step toggles - make entire step container clickable
    for (let i = 1; i <= 7; i++) {
        const stepContainer = document.querySelector(`#step${i}-content`).closest('.showcase-step');
        const toggle = document.getElementById(`step${i}-toggle`);
        const content = document.getElementById(`step${i}-content`);
        
        stepContainer.addEventListener('click', function() {
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggle.textContent = '[Click to collapse]';
            } else {
                content.style.display = 'none';
                toggle.textContent = '[Click to expand]';
            }
        });
    }

    // Make section titles clickable - Config toggle
    const configH2 = document.querySelector('#config-toggle').closest('h2');
    configH2.addEventListener('click', function() {
        const content = document.getElementById('config-content');
        const toggle = document.getElementById('config-toggle');
        
        if (content.style.display === 'none') {
            content.style.display = 'block';
            toggle.textContent = '[Click to collapse]';
            // Scroll to position content just below header
            scrollContentBelowHeader(content);
        } else {
            content.style.display = 'none';
            toggle.textContent = '[Click to expand]';
            // Check if all sections are collapsed and scroll to top if needed
            setTimeout(() => {
                checkAllSectionsCollapsed();
            }, 100);
        }
    });

    // Make section titles clickable - Template toggle
    const templateH2 = document.querySelector('#template-toggle').closest('h2');
    templateH2.addEventListener('click', function() {
        const content = document.getElementById('template-content');
        const toggle = document.getElementById('template-toggle');
        
        if (content.style.display === 'none') {
            content.style.display = 'block';
            toggle.textContent = '[Click to collapse]';
            // Scroll to position content just below header
            scrollContentBelowHeader(content);
        } else {
            content.style.display = 'none';
            toggle.textContent = '[Click to expand]';
            // Check if all sections are collapsed and scroll to top if needed
            setTimeout(() => {
                checkAllSectionsCollapsed();
            }, 100);
        }
    });

    // Make section titles clickable - API modules toggle
    const apiH2 = document.querySelector('#api-toggle').closest('h2');
    apiH2.addEventListener('click', function() {
        const content = document.getElementById('api-content');
        const toggle = document.getElementById('api-toggle');
        
        if (content.style.display === 'none') {
            content.style.display = 'block';
            toggle.textContent = '[Click to collapse]';
            // Scroll to position content just below header
            scrollContentBelowHeader(content);
        } else {
            content.style.display = 'none';
            toggle.textContent = '[Click to expand]';
            // Check if all sections are collapsed and scroll to top if needed
            setTimeout(() => {
                checkAllSectionsCollapsed();
            }, 100);
        }
    });

    // Make section titles clickable - Libraries toggle
    const librariesH2 = document.querySelector('#libraries-toggle').closest('h2');
    librariesH2.addEventListener('click', function() {
        const content = document.getElementById('libraries-content');
        const toggle = document.getElementById('libraries-toggle');
        
        if (content.style.display === 'none') {
            content.style.display = 'block';
            toggle.textContent = '[Click to collapse]';
            // Scroll to position content just below header
            scrollContentBelowHeader(content);
        } else {
            content.style.display = 'none';
            toggle.textContent = '[Click to expand]';
            // Check if all sections are collapsed and scroll to top if needed
            setTimeout(() => {
                checkAllSectionsCollapsed();
            }, 100);
        }
    });

    // Make section titles clickable - Features toggle (starts collapsed)
    const featuresH2 = document.querySelector('#features-toggle').closest('h2');
    featuresH2.addEventListener('click', function() {
        const content = document.getElementById('features-content');
        const toggle = document.getElementById('features-toggle');
        
        if (content.style.display === 'none') {
            content.style.display = 'block';
            toggle.textContent = '[Click to collapse]';
            // Scroll to position content just below header
            scrollContentBelowHeader(content);
        } else {
            content.style.display = 'none';
            toggle.textContent = '[Click to expand]';
            // Check if all sections are collapsed and scroll to top if needed
            setTimeout(() => {
                checkAllSectionsCollapsed();
            }, 100);
        }
    });

    // Make section titles clickable - Code Examples toggle
    const examplesH2 = document.querySelector('#examples-toggle').closest('h2');
    examplesH2.addEventListener('click', function() {
        const content = document.getElementById('examples-content');
        const toggle = document.getElementById('examples-toggle');
        
        if (content.style.display === 'none') {
            content.style.display = 'block';
            toggle.textContent = '[Click to collapse]';
            // Scroll to position content just below header
            scrollContentBelowHeader(content);
        } else {
            content.style.display = 'none';
            toggle.textContent = '[Click to expand]';
            // Check if all sections are collapsed and scroll to top if needed
            setTimeout(() => {
                checkAllSectionsCollapsed();
            }, 100);
        }
    });

    // Copy template to clipboard functionality
    const copyButton = document.getElementById('copy-template-btn');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            // Get the template code without HTML formatting
            const codeBlock = document.querySelector('.template-section .code-block');
            const codeText = codeBlock.textContent || codeBlock.innerText;
            
            // Copy to clipboard
            navigator.clipboard.writeText(codeText).then(function() {
                // Show success feedback
                const button = document.getElementById('copy-template-btn');
                const originalText = button.innerHTML;
                button.innerHTML = '✅ Copied!';
                button.style.background = 'linear-gradient(135deg, #34d399, #10b981)';
                
                // Reset button after 2 seconds
                setTimeout(function() {
                    button.innerHTML = originalText;
                    button.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
                }, 2000);
            }).catch(function(err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = codeText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // Show success feedback
                const button = document.getElementById('copy-template-btn');
                const originalText = button.innerHTML;
                button.innerHTML = '✅ Copied!';
                button.style.background = 'linear-gradient(135deg, #34d399, #10b981)';
                
                // Reset button after 2 seconds
                setTimeout(function() {
                    button.innerHTML = originalText;
                    button.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
                }, 2000);
            });
        });
    }

    // Copy woodcutter script to clipboard functionality
    const copyWoodcutterButton = document.getElementById('copy-woodcutter-btn');
    if (copyWoodcutterButton) {
        copyWoodcutterButton.addEventListener('click', function() {
            // Get the woodcutter code without HTML formatting
            const codeBlock = document.querySelector('#examples-content .code-block');
            const codeText = codeBlock.textContent || codeBlock.innerText;
            
            // Copy to clipboard
            navigator.clipboard.writeText(codeText).then(function() {
                // Show success feedback
                const button = document.getElementById('copy-woodcutter-btn');
                const originalText = button.innerHTML;
                button.innerHTML = '✅ Copied!';
                button.style.background = 'linear-gradient(135deg, #34d399, #10b981)';
                
                // Reset button after 2 seconds
                setTimeout(function() {
                    button.innerHTML = originalText;
                    button.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
                }, 2000);
            }).catch(function(err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = codeText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // Show success feedback
                const button = document.getElementById('copy-woodcutter-btn');
                const originalText = button.innerHTML;
                button.innerHTML = '✅ Copied!';
                button.style.background = 'linear-gradient(135deg, #34d399, #10b981)';
                
                // Reset button after 2 seconds
                setTimeout(function() {
                    button.innerHTML = originalText;
                    button.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
                }, 2000);
            });
        });
    }

    // Copy fisher script to clipboard functionality
    const copyFisherButton = document.getElementById('copy-fisher-btn');
    if (copyFisherButton) {
        copyFisherButton.addEventListener('click', function() {
            const codeBlock = document.querySelector('#fisher-example .code-block');
            const codeText = codeBlock.textContent || codeBlock.innerText;
            
            navigator.clipboard.writeText(codeText).then(function() {
                const button = document.getElementById('copy-fisher-btn');
                const originalText = button.innerHTML;
                button.innerHTML = '✅ Copied!';
                button.style.background = 'linear-gradient(135deg, #34d399, #10b981)';
                
                setTimeout(function() {
                    button.innerHTML = originalText;
                    button.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
                }, 2000);
            });
        });
    }

    // Copy stalls script to clipboard functionality
    const copyStallsButton = document.getElementById('copy-stalls-btn');
    if (copyStallsButton) {
        copyStallsButton.addEventListener('click', function() {
            const codeBlock = document.querySelector('#stalls-example .code-block');
            const codeText = codeBlock.textContent || codeBlock.innerText;
            
            navigator.clipboard.writeText(codeText).then(function() {
                const button = document.getElementById('copy-stalls-btn');
                const originalText = button.innerHTML;
                button.innerHTML = '✅ Copied!';
                button.style.background = 'linear-gradient(135deg, #34d399, #10b981)';
                
                setTimeout(function() {
                    button.innerHTML = originalText;
                    button.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
                }, 2000);
            });
        });
    }
});

// Example tab switching functionality
function showExample(exampleType) {
    console.log('Switching to example:', exampleType); // Debug log
    
    // Hide all example contents
    document.querySelectorAll('.example-content').forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.example-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected example
    const selectedExample = document.getElementById(exampleType + '-example');
    if (selectedExample) {
        selectedExample.classList.add('active');
        selectedExample.style.display = 'block';
        console.log('Showing example:', exampleType); // Debug log
    } else {
        console.error('Could not find example element:', exampleType + '-example');
    }
    
    // Add active class to clicked tab (using event if available, otherwise find by text)
    if (typeof event !== 'undefined' && event.target) {
        event.target.classList.add('active');
    } else {
        // Fallback: find the tab by matching the onclick attribute
        const targetTab = document.querySelector(`[onclick="showExample('${exampleType}')"]`);
        if (targetTab) {
            targetTab.classList.add('active');
        }
    }
}
