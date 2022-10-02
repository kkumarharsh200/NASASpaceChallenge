import './CourselItems.css'
import {topicList} from '../../dummyData'
import DropItem from '../DropdownItem/DropItem'
// console.log(topicList);
function CourselItem() {

    
    // useEffect()
  return (
    <div class="itemsList">
    {
   
      topicList.map((topic) => (
        
        <DropItem data = {topic}/>
      ))
    }
    </div>
  )
}

export default CourselItem