// SafeRS Lite Documentation JavaScript

// Function to check if all sections are collapsed and scroll to top if needed
function checkAllSectionsCollapsed() {
    const sections = [
        'showcase-content',
        'template-content', 
        'api-content',
        'libraries-content',
        'features-content'
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
});
