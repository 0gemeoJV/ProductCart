import '../../stylesComponents/ButtonStyles.css';

function OrdinayButtons({props}: {props: string}) {
  return (
    <>
        <button className='ordinary-button'>
            {props}
        </button>
    </>
  )
}

export default OrdinayButtons