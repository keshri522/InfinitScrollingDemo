# Infinite Scrolling React App

This React application demonstrates infinite scrolling using a grid system, a loading animation, and debouncing. The application fetches data from a placeholder API and dynamically loads more content as the user scrolls
#Features

- Infinite scrolling with a grid layout.
- Loading spinner animation to indicate data fetching.
  -Debouncing to optimize scroll event handling.

  #Technologies Used

- React
  -CSS (Grid System)
  -Placeholder API: JSONPlaceholder

#Project Structure

- src/components: Contains React components.
- src/Results/Child.js: Child component responsible for rendering individual data items.
- src/Loading/spinner.js: Loading spinner component.
- src/Home.js: Main component implementing infinite scrolling.

#Implementation Details

- The Home component uses the useEffect hook to fetch initial data and set up the scroll event listener.
- Infinite scrolling is achieved by detecting when the user has scrolled to the bottom of the page.
- The loading spinner is displayed while fetching additional data.
- Debouncing is applied to the scroll event to optimize performance and prevent unnecessary data fetching.

  #Installation
  -git clone https://github.com/your-username/infinite-scroll-react.git
  
    #Deployment
  -https://keshri522.github.io/InfinitScrollingDemo/

#Navigate to the project directory:

- cd infinite-scroll-react

# Install Depdencies

-npm install

#Start the development server:

- npm start
