import { 
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom';


/**
 * This HOC returns the component with 3 properties for navigation
 * 
 * location - returns the current location
 * navigate - for redirect ex: this.props.navigate('/');
 * params - contain key/value url params
 */
function withRouter(Component){
    // wrapper
    function ComponentWithRouterProps(props){
      const location = useLocation();
      const navigate = useNavigate();
      const params = useParams();
      //
      return <Component {...props}
                         location={location} 
                         params={params} 
                         navigate={navigate} />;
    }
    return ComponentWithRouterProps;
  }
  //
  export default withRouter;