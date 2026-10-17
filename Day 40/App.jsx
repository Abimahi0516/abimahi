import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import  ProfileCard from './Components/Task1.jsx';
import Button from './Components/Task2.jsx';
import Card from './Components/Task3.jsx';


function App() {

  return (
  <div>
      <h1>React Props & Children</h1>

      {/* Task 1 */}
      <section className="section">
        <h1>User Profile Cards</h1>

        <div className="container">
          <ProfileCard
            name="Jey"
            age={25}
            role="Developer"
          >
            <p>Likes React and JavaScript.</p>
          </ProfileCard>

          <ProfileCard
            name="Abi"
            age={22}
            role="Designer"
          >
            <p>Loves UI and creative design.</p>
          </ProfileCard>

          <ProfileCard
            name="Mahi"
            age={28}
            role="Tester"
          >
            <p>Enjoys finding and fixing bugs.</p>
          </ProfileCard>
                </div>
      </section>

        {/* Task 2: Reusable Buttons */}
      <section className="section">
        <h1>Reusable Buttons</h1>

        <div className="container">
          <Button color="blue" size="small">
            Submit
          </Button>

          <Button color="green" size="medium">
            Save
          </Button>

          <Button color="crimson" size="large">
            Delete
          </Button>
        </div>
      </section>

      {/* Task 3: Reusable Cards */}
      <section className="section">
        <h1>Reusable Cards</h1>

        <div className="container">
          <Card title="Product" footer="₹999">
            <p>This is a great product.</p>
          </Card>

          <Card title="About" footer="Learn More">
            <p>We build useful and creative websites.</p>
          </Card>

          <Card title="Contact" footer="Contact Us">
            <p>Email: Contact@gmail.com</p>
          </Card>
        </div>
      </section>
    </div>
     
  );
}

export default App;
