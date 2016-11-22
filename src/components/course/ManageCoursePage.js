import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return(
            <div>
                <CourseForm
                    allAuthors={[]}
                    course={this.state.course}
                    errors={this.state.errors}/>
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
    let course = { id: '', watchHref: '', title: '' };
    return {
        course: course
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
