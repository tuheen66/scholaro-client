import easy from '../../../assets/images/easy.png'
import top from '../../../assets/images/top.png'
import pay from '../../../assets/images/pay.png'

const KeyFeatures = () => {
  return (
    <div>
      <section className="bg-gray-100 py-8 px-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
            <img className='w-14 mx-auto mb-2' src={easy} alt="" />
            <h3 className="text-lg font-medium mb-2">Easy Application</h3>
            <p className="text-gray-600">
              Quick and straightforward application process.
            </p>
          </div>
          <div className="bg-red-100 p-6 rounded-lg shadow-md text-center">
            <img className='w-14 mx-auto mb-2' src={top} alt="" />
            <h3 className="text-lg font-medium mb-2">Top Colleges</h3>
            <p className="text-gray-600">
              Explore the best colleges across the country.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <img className='w-14 mx-auto mb-2' src={pay} alt="" />
            <h3 className="text-lg font-medium mb-2">Secure Payment</h3>
            <p className="text-gray-600">
              Safe and secure payment methods for easy transactions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyFeatures;
