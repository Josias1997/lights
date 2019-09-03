import React, {Component} from 'react';
import axios from 'axios';
import LoadComponent from '../../Utility/LoadComponent/LoadComponent';

class Home extends Component {

    state = {
      text: '',
      loading: true,
      error: false
    };

    componentDidMount() {
        axios.get('/api/blog/home/')
        .then(response => {
          this.setState({
            text: response.data[0].about_me,
            loading: false,
          })
        }).catch(error => {
            this.setState({
              loading: false,
              error: true
            })
        })
    }
    render() {
      const {loading, error, text} = this.state
        return (
            <div className="row py-5" id="about-me">
              <div className="col-md-12 text-center">
                <LoadComponent loading={!loading} error={error} component={"home"}>
                  {text}
                </LoadComponent>
              </div>
            </div>

        )
    }
}


export default Home;