import css from './TopBlock.module.css'
  
function TopBlock(props) {
  const list = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '
  ]
  return <div className="container" id='1'>
    <div className={css.mainBlock}>
      <div className={css.titleDescription}>
        <h2 className={css.Title}>Найпопулярніші<br />моделі автомобілів <br/>у світі</h2>
        <h4 className={css.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat. </h4>
      </div>
      <div className={css.BlockDescription}>{list.map((item, index)=>{
        return <div className={css.descriptionIndex}>
          <h5 className={css.numberDescription}>{index + 1}</h5>
          {index === 0? <div className={css.cup}></div> : null}
          <h5 className={css.textDdescription}>{item}</h5>
        </div>
      })}</div>
    </div>
  </div>
}
export default TopBlock;