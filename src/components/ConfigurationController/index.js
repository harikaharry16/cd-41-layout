// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        onToggleShowContent,
      } = value

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="conf-control-container">
          <div className="res-cont">
            <h1 className="layout-title">Layout</h1>
            <div className="check-label-container">
              <input
                type="checkbox"
                id="leftNavbar"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="leftNavbar" className="label-style">
                Left Navbar
              </label>
            </div>

            <div className="check-label-container">
              <input
                type="checkbox"
                id="content"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="content" className="label-style">
                Content
              </label>
            </div>

            <div className="check-label-container">
              <input
                type="checkbox"
                id="rightNavbar"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="rightNavbar" className="label-style">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
