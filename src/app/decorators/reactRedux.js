import { connect } from "react-redux";

export const mapStateToProps = (mapStateToProps, options) => {
  return Component => { connect(mapStateToProps, {})(Component) }
}
  
export const mapDispatchToProps = (mapDispatchToProps, options) => {
  const mapStateToProps = () => ({});
  return Component => { connect(mapStateToProps, mapDispatchToProps)(Component) }
}