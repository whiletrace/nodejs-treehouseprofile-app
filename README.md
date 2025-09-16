# Node.js Treehouse Profile App

A command-line utility that fetches and displays user profile information from the Treehouse learning platform API. This interactive tool allows you to quickly lookup Treehouse user statistics including total points and badges earned.

## Features

- **Interactive CLI Interface** - User-friendly prompts for username input
- **Real-time API Integration** - Connects to Treehouse's public JSON API
- **Profile Statistics** - Displays total points and badge count
- **Error Handling** - Manages API errors and network failures gracefully
- **Secure HTTPS** - Uses secure connections for API communication

## Technology Stack

- **Runtime**: Node.js (JavaScript)
- **HTTP Client**: Node.js built-in `https` module
- **User Input**: `prompt` library for interactive CLI
- **Dependencies**: Minimal - only one external package required

## Installation & Setup

### Prerequisites
- Node.js (tested with v22.17.1, compatible with most Node.js versions)
- npm (comes with Node.js)
- Internet connection for API calls

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/whiletrace/nodejs-treehouseprofile-app.git
   cd nodejs-treehouseprofile-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   node profile.js
   ```

## Usage

When you run the application, it will prompt you to enter a Treehouse username:

```bash
$ node profile.js
Enter a Treehouse username: chalkers
★★★★★ 2923 JavaScript Points ★★★★★
◆◆◆◆◆ 59 Badges ◆◆◆◆◆
```

### Example Output
```
Enter a Treehouse username: username
★★★★★ 1500 JavaScript Points ★★★★★
◆◆◆◆◆ 25 Badges ◆◆◆◆◆
```

## API Integration

### Treehouse API
- **Endpoint**: `https://teamtreehouse.com/{username}.json`
- **Method**: GET
- **Authentication**: None required (public API)
- **Response Format**: JSON

### Expected API Response
```json
{
  "points": {
    "total": 2923,
    "JavaScript": 1500
  },
  "badges": [
    // Array of badge objects (count used for display)
  ]
}
```

### Error Handling
- HTTP status code validation (expects 200 OK)
- JSON parsing error handling
- Network connectivity issues
- Invalid username handling
- User-friendly error messages

## Project Structure

```
nodejs-treehouseprofile-app/
├── profile.js              # Main application with core functionality
├── app.js                  # Entry point (minimal, contains commented code)
├── package.json            # Project metadata and dependencies
├── .gitignore             # Git ignore rules
└── README.md              # Project documentation
```

## Core Components

### Main Module (`profile.js`)

#### `TreehouseAPI(username)`
- Makes HTTPS request to Treehouse API
- Handles response data collection
- Validates HTTP status codes
- Parses JSON response

#### `printMessage(username, badgeCount, totalPoints)`
- Formats and displays user statistics
- Creates decorative output with stars and diamonds
- Shows JavaScript points and total badge count

#### `printError(error)`
- Handles and displays error messages
- User-friendly error formatting

#### Interactive Prompt Setup
- Uses `prompt` library for username input
- Handles user input validation
- Manages application flow

### Dependencies

**Production Dependencies:**
- `prompt` (^1.0.0) - Interactive command-line prompts

**Built-in Node.js Modules:**
- `https` - Secure HTTP requests
- `http` - HTTP protocol support

## Configuration

### Package.json
```json
{
  "name": "yes",
  "version": "1.0.0",
  "description": "command line tool that grabs user information from treehouse api",
  "main": "yes",
  "dependencies": {
    "prompt": "^1.0.0"
  },
  "author": "Trace Harris",
  "license": "ISC"
}
```

### Environment
- No environment variables required
- No configuration files needed
- All settings handled through user input

## Development

### Current State
- Functional command-line application
- Core features working as intended
- Some incomplete code in `app.js` suggests potential command-line argument processing

### Running the Application
```bash
# Primary method
node profile.js

# Alternative (if app.js were completed)
node app.js
```

### Error Scenarios
The application handles various error conditions:
- **Invalid Username**: User not found on Treehouse
- **Network Errors**: Connection issues or API unavailability
- **Malformed Response**: Invalid JSON or missing data fields
- **HTTP Errors**: Non-200 status codes from API

## Educational Value

This project demonstrates:
- **Node.js API Integration** - Working with external APIs
- **Asynchronous Programming** - Handling HTTP requests and responses
- **Error Handling** - Robust error management patterns
- **CLI Development** - Building interactive command-line tools
- **JSON Processing** - Parsing and extracting data from API responses

## Use Cases

- **Quick Profile Lookup** - Check Treehouse learning progress
- **Educational Tool** - Learn Node.js API integration concepts
- **Development Learning** - Understand asynchronous JavaScript patterns
- **Progress Tracking** - Monitor Treehouse skill development

## Potential Improvements

- Complete command-line argument processing in `app.js`
- Add support for multiple users in batch
- Implement caching for frequent lookups
- Add more detailed badge information display
- Include skill-specific point breakdowns
- Add unit tests for reliability
- Implement configuration file support

## Troubleshooting

### Common Issues
1. **Network Connectivity**: Ensure internet connection is available
2. **Invalid Username**: Verify the username exists on Treehouse
3. **API Changes**: Treehouse API structure may change over time
4. **Node.js Version**: Ensure compatible Node.js version is installed

### Debug Information
The application provides clear error messages for troubleshooting:
- API connection status
- HTTP response codes
- JSON parsing errors
- Username validation feedback

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with various usernames
5. Submit a pull request

## License

ISC License

## Author

**Trace Harris**

---

*A simple yet effective command-line tool for accessing Treehouse user profile data, demonstrating Node.js API integration and CLI development principles.*