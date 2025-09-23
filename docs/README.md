# SafeRS Lite API Documentation

This directory contains the complete API documentation for SafeRS Lite scripting modules.

## 📁 Structure

```
docs/
├── index.html                    # Main documentation page
└── src/
    ├── core/
    │   └── scripting_api/        # Core automation API modules
    │       ├── mouse_automation.html
    │       ├── color_automation.html
    │       ├── keyboard_automation.html
    │       ├── inventory_automation.html
    │       ├── spellbook_automation.html
    │       ├── timing_automation.html
    │       └── hotkey_automation.html
    └── internal_scripts/
        └── example_template.html # BaseScript template example
```

## 🚀 Hosting

This documentation is designed to be hosted on GitHub Pages:

1. Push the `docs/` folder to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to "Deploy from a branch" → "main" → "/ (root)"
4. Access at: `https://yourusername.github.io/repository-name/docs/`

## 🔄 Regenerating Documentation

To regenerate the documentation after code changes:

```bash
# Set Python path and regenerate
$env:PYTHONPATH = "$env:PYTHONPATH;src"
python -m pdoc --html --output-dir docs src.core.scripting_api.mouse_automation src.core.scripting_api.color_automation src.core.scripting_api.keyboard_automation src.core.scripting_api.inventory_automation src.core.scripting_api.spellbook_automation src.core.scripting_api.timing_automation src.core.scripting_api.hotkey_automation

# Recreate the index.html manually (as it's custom)
# Then commit and push changes
```

## 📖 Features

- **Clean, focused design** with SafeRS Lite branding
- **Complete API reference** for all automation modules
- **BaseScript template** with comprehensive examples
- **Mobile-responsive** layout
- **Easy navigation** between modules
