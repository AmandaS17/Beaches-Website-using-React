import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: '#E1F5FE',
  },
};

const tilesData = [
  {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/85/48/e6/seven-mile-beach-grand.jpg",
    title: 'Beach 1',
    author: 'jill111',
    description: 'a beach',
  },
  {
    img: "https://static.pexels.com/photos/68672/beach-beverage-caribbean-cocktail-68672.jpeg",
    title: 'Beach 2',
    author: 'pashminu',
    description: 'a beach',
  },
  {
    img: "http://www.publicdomainpictures.net/pictures/150000/velka/tropical-beach-1454007190ZAK.jpg",
    title: 'Beach 3',
    author: 'pashminu',
    description: 'a beach',
  },
  {
    img: "http://cdn-image.travelandleisure.com/sites/default/files/styles/tnl_redesign_article_landing_page/public/1485453268/love-beach-mexico-HIDDEN0117.jpg?itok=gaQ9AyCU",
    title: 'Beach 4',
    author: 'pashminu',
    description: 'a beach',
  },
];


export default class ImagesGrid1 extends React.Component{
  constructor(props){
    super(props);
    this.title = ""
  }

  render(){
    return(
      <div id="imagesGrid1">
        <div className = "imagesTitle">
          {this.props.title}
        </div>
        <div style={styles.root} className = "gridBox" id="gridBox" >
          <GridList style={styles.gridList} cols={1.2} cellHeight={400} id="grid1">
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                titleStyle={styles.titleStyle}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={tile.img}/>
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    )
  }
}
