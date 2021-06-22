
class App extends Component {
    componentDidMount() {
      const { fetchHospital } = this.props;
      fetchHospital();
    }
    render() {
      const { hospitalData } = this.props.hospital;
      return (
        <Router>
          <div className="wrapper d-block d-flex">
            <SideBar hospital={hospitalData} />
            <Switch>
              <Route exact path="/about" component={About} />
              <Route
              path="/"
                render={(props) => (
                  <HomePage {...props} hospital={hospitalData} />
                )}
              />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  const mapStateToProps = (state) => ({
    hospital: state.hospital,
  });
  
  export default connect(mapStateToProps, { fetchHospital })(App);