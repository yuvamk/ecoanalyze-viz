# EcoAnalyze-Viz: Server Energy Cost Analysis Dashboard

## Overview
EcoAnalyze-Viz is a web-based dashboard application that helps organizations analyze and optimize their server infrastructure costs. It provides real-time calculations and visualizations for comparing physical server costs with virtualized alternatives, helping make informed decisions about server infrastructure.

## Features
- **Real-time Cost Analysis**: Calculate and compare costs between physical and virtualized server setups
- **Interactive Dashboard**: Dynamic visualizations including:
  - Resource utilization graphs
  - Cost comparison charts
  - Energy savings potential analysis
  - Key performance metrics
- **Responsive Design**: Fully responsive interface that works across all device sizes
- **Real-time Updates**: Instant updates to visualizations when server configurations change

## Technologies Used
- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Charts & Visualizations**: Recharts
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Toast Notifications**: Sonner

## Project Structure
```
src/
├── components/         # React components
├── contexts/          # Context providers
├── utils/             # Utility functions
└── pages/             # Page components
```

## Key Components
- **ServerConfigForm**: Handles input of server specifications
- **KeyMetrics**: Displays important performance indicators
- **ResourceUtilization**: Shows server resource usage
- **CostComparison**: Compares costs between physical and virtual setups
- **EnergySavings**: Visualizes potential energy savings

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Usage
1. Enter your server specifications in the configuration form:
   - Number of physical servers
   - CPU cores per server
   - RAM per server
   - Power consumption
   - Energy rate
2. Click "Calculate" to see real-time analysis
3. View the results across different visualizations and metrics

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Built with [Lovable](https://lovable.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Charts powered by [Recharts](https://recharts.org)