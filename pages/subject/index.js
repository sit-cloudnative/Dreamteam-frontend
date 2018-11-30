import React from 'react'
import Curriculum from '../../components/curriculum'
import NavBar from '../../components/navbar'


export default class video extends React.Component {
    
    async componentDidMount() {
        let {data} = await axios.get('/curriculums')
        this.setState({ 
            curriculum: {data}.data 
        })
    }

    async getSubjectList(targetCurriculumId) {
        const {data} = await axios.get('/curriculum/'+ targetCurriculumIds)
        this.setState({ subjectList: data })
    }

    redirectToVideoListPage(targetSubjectId) {
        Router.push({
            pathname:'/videos',
            query:{subject_id:targetSubjectId}
        })
    }
    
    render() {
        return (<div>
            <NavBar></NavBar>            
            <Curriculum></Curriculum>
        </div>)
    }
}