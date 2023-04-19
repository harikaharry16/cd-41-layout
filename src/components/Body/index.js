// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-container">
              <h1 className="left-nav-title">Left Navbar Menu</h1>
              <ul className="ul-list">
                <li className="list-item">Item 1</li>
                <li className="list-item">Item 2</li>
                <li className="list-item">Item 3</li>
                <li className="list-item">Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1 className="content-title">Content</h1>
              <p className="content-desc">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
                eisumod tempor incididunt ut labore dolore magna aliqua.Ut enim
                ad minim veniam
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-container">
              <h1 className="right-nav-title">Right Navbar</h1>
              <div className="boxes-container">
                <p className="box">Ad 1</p>
                <p className="box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
