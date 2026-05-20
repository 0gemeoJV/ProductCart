import '../../stylesComponents/ButtonStyles.css';

function OrdinaryButtons({props}: {props: string}) {
  return (
    <>
        <button className='ordinary-button'>
            {props}
        </button>
    </>
  )
}

export default OrdinaryButtons