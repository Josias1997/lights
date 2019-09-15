import React, {useRef} from 'react';
import { connect } from 'react-redux';



const GalleryModal = props => {
	const {pictures, currentCategory, pictureId} = props;
	const imgElement = useRef(null);
	let currentPictures = pictures;
	console.log(pictureId);
	if (currentCategory !== 'all') {
		currentPictures = props.pictures.filter(picture => (
			picture.category.id === currentCategory));
	}
	return (
		<div id="carousel" className="carousel slide carousel-fade" data-ride="carousel"  style={{
		  			height: 60 + '%'
		  		}} >
		  <ol className="carousel-indicators">
		  {
		  	currentPictures.map((picture, index) => (
		  		<li data-target="#carousel" data-slide-to={index} className={ picture.id === pictureId ? "active":""} ></li>
		  		))
		  }
		  </ol>
		  <div className="carousel-inner" role="listbox">
		  {
		  	currentPictures.map(picture => (
		  		<div className={"carousel-item " + (picture.id === pictureId ? "active":"")}>
			      <div className="view">
			        <img className="d-block w-100" src={picture.url} alt={picture.title}/>
			        <div className="mask"></div>
			      </div>
			      <div className="carousel-caption">
			        <div className="animated fadeInDown">
			          <h3 className="h3-responsive">{picture.category.name}</h3>
			        </div>
			      </div>
			    </div>
		  		
		  	))
		  }
		  </div>
		  <a className="carousel-control-prev float-left" href="#carousel" role="button" data-slide="prev">
		    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span className="sr-only">Previous</span>
		  </a>
		  <a className="carousel-control-next float-right" href="#carousel" role="button" data-slide="next">
		    <span className="carousel-control-next-icon" aria-hidden="true"></span>
		    <span className="sr-only">Next</span>
		  </a>
		</div>
	)
}

const mapStateToProps = state => {
    return {
        pictures: state.home.pictures,
    }
};

export default connect(mapStateToProps)(GalleryModal);