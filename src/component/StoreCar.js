import './StoreCar.css'

function StoreCar(){
    return(
        <div className='container-store'> 
            <h1>Store<span>Car</span></h1>

            <h3>BWM SERIES 3</h3>
            <div className='store-flex'>
                <div className='product'>
                    <div className='product-img'>
                        <img src='bmw_s3_msport.png' />
                    </div>
                    <div className='container-text'>
                        <h4>BWM 320d M SPORT</h4>
                        <p>2,519,000</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product-img'>
                        <img src='330e_msport.png' />
                    </div>
                    <div className='container-text'>
                        <h4>BWM 330e M SPORT</h4>
                        <p>2,769,000</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product-img'>
                        <img src='320li_lux.png' />
                    </div>
                    <div className='container-text'>
                        <h4>320Li Luxury</h4>
                        <p>2,439,000</p>
                    </div>
                </div>
            </div>
            <div className='store-flex'>
                <div className='product'>
                    <div className='product-img'>
                        <img src='320li_msport.png' />
                    </div>
                    <div className='container-text'>
                        <h4>320Li M SPORT</h4>
                        <p>2,869,000</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product-img'>
                        <img src='m340-x.png' />
                    </div>
                    <div className='container-text'>
                        <h4>M320i xDRIVE</h4>
                        <p>3,969,000</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product-img'>
                        <img src='' />
                    </div>
                    <div className='container-text'>
                        <h4></h4>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreCar;