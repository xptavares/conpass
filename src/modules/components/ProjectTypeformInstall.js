import React from 'react'

class ProjectTypeformInstall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInstalled: props.isInstalled
    }
  }

  render() {
    return (
      <div className="card-text project-align-items-center">
        <div className={this.state.isInstalled ? 'inline project-circle project-green' : 'inline project-circle project-red'}></div>
        <div className="inline italic">{this.state.isInstalled ? 'instalado' : 'não instalado'}</div>
        <div className="clearBoth"></div>
      </div>
    )
  }
}
export default ProjectTypeformInstall;
