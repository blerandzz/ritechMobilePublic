
# RitechMobile Testing Project

This project contains automated tests for the RitechMobile application using WebdriverIO and Appium. The tests follow the Page Object Model (POM) pattern for better maintainability and readability.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (recommended version 16.16.0).
- **Appium**: Install Appium globally to interact with the Android emulator.
    ```bash
    npm install -g appium
    ```
- **Android Emulator**: Set up an Android emulator or connect an Android device for testing.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ritechmobile.git
    cd ritechmobile
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Configuration

1. **Start Appium Server**: Start the Appium server with `--relaxed-security` on port `4723`:
    ```bash
    appium -p 4723 --relaxed-security
    ```

2. **Device Setup**: Make sure your emulator or physical device is running and accessible via ADB.

## Project Structure

```plaintext
ritechmobile/
├── app/                     # Application files (if applicable)
├── config/                  # Configuration files for WebdriverIO and Appium
├── test/
│   ├── specs/               # Test specifications
│   │   └── AddNote.js        # Sample test script
│   ├── screenObjects/       # Page Object Model files for each screen
│   └── utils/               # Utility functions (e.g., date formatting)
├── .gitignore               # Git ignore file
├── babel.config.js          # Babel configuration for ES6 support
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
```

- **test/specs**: Contains test scripts, organized by feature or test case.
- **test/screenObjects**: Holds page objects for each screen in the app, following the Page Object Model (POM) pattern.
- **test/utils**: Utility functions, such as `getCurrentMonthYear`, for reusable helper methods.

## Running the Tests

To execute the tests, follow these steps:

1. **Start the Appium server**:
    ```bash
    appium -p 4723 --relaxed-security
    ```

2. **Run a Specific Test Suite**:
    To run the `sampleSuite` test suite (which includes `AddNote.js`), use the following command:
    ```bash
    npm run test:android -- --suite sampleSuite
    ```

   - Make sure `sampleSuite` is defined in your WebdriverIO configuration file (`wdio.conf.js`) with `AddNote.js` included.

### Running a Specific Test Case

To run a single test file (e.g., `AddNote.js`), specify the test file path:

```bash
npx wdio run config/wdioConfig/wdio.android.conf.js
```

## Utilities

### Date Utility

The `getCurrentMonthYear` function in `utils/dateUtils.js` generates the current month and year in "November 2024" format. This is used in test cases that require date-based validation.

## Notes

- The project uses **Page Object Model (POM)** for test organization, making tests modular and easier to maintain.
- **Random Data Generation** is used in some tests to ensure unique test data (e.g., random note titles).
- Ensure the Appium server and Android emulator/device are properly configured before running the tests.

---
