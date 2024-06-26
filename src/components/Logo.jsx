import Image from 'next/image'
import LogoCp from '../../public/logo.png'
function Logo() {
    return(

       <>
       <div className='flex justify-center sm:justify-start items-center overflow-auto'>
       <Image
       className='ml-8'
      src={LogoCp}
      width={50}
      height={50}
      alt="CP"
     />
     <h5 className='flex items-center pl-5 text-2xl font-semibold font-sedan '> <p className='text-logoColor'>Cli</p> <p className='text-logo2'>mate</p> <p className='text-logoColor'>Pul</p><p className='text-logo2'>se</p></h5>
    </div>
       </>
    );
    
}

export default Logo;