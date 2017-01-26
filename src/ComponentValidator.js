export default (WrappedComponent) => (
  class Component extends WrappedComponent {
    render() {
      if(this.props.checker) {
        return super.render()
      }
      else {
        return null
      }
    }
  }
)
