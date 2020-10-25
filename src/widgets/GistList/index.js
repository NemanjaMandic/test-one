import { connect } from "react-redux";
import { getGists } from "../../state/gists/actions";
import GistList, { mapStateToProps } from "./GistList";

export default connect(mapStateToProps, { getGists })(GistList);
