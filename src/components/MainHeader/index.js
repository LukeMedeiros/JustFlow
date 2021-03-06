import MainHeader from "./component";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateHeaderTitle } from '../../actions/uiActions';
import { updateViewType } from '../../actions/songActions';
import {reorderPlaylistTrack, fetchPlaylistSongs} from '../../actions/playlistActions';
import {playSpecificTrack} from '../../actions/spotifyPlayerActions';
import {updateOrganizingState} from '../../actions/playlistOrganizeActions';

const mapStateToProps = (state) => {

  return {
    songPaused: state.songsReducer.songPaused,
    headerTitle: state.uiReducer.title,
    viewType: state.songsReducer.viewType,
    playlists: state.playlistReducer.playlists,
    token: state.tokenReducer.token,
    songs: state.songsReducer.songs,
    currentPlayerState: state.spotifyPlayerReducer.currentPlayerState
  };

};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    updateHeaderTitle,
    updateViewType,
    reorderPlaylistTrack,
    fetchPlaylistSongs,
    playSpecificTrack,
    updateOrganizingState
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
