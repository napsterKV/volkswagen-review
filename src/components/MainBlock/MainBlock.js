import css from './MainBlock.module.css'
function MainBlock(props) {
  return <div className={css.backgroundImage}>
    <div className='container'>
      <header className={css.header}>
        <nav className={css.nav}>
          <ul>
            <li>
              <a href='#1'>Головна</a>
            </li>
            <li>
              <a href='#2'>Новини</a>
            </li>
            <li>
              <a href='#3'>Галерея</a>
            </li>
          </ul>
        </nav>
        <div className={css.burger}>
          <span className={`${css.line} ${css.lineLeft}`}>

          </span>
          <span className={css.line}>

          </span>
          <span className={`${css.line} ${css.lineLeft}`}> 

          </span>
        </div>
      </header>
      <div className={css.preview} style={{textAlign: 'center'}}>
      <h1>
        car musc
      </h1>
        <div className='dotsWrapper'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
      </div>
        <h3 className={css.h3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.
        </h3>
        <a className='button' href='#2'>читати далі</a>
      </div>
    </div>
  </div>
}
export default MainBlock;