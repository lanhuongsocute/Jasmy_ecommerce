import React from 'react';

const CartPackage = ({ products, carts, idcart_can_tim }) => {
  const total = Object.values(carts).reduce((acc, cart) => {
    Object.values(cart).forEach(quantity => {
      acc += quantity;
    });
    return acc;
  }, 0);

  return (
    <form className="bg0 p-t-130 p-b-85" method="post">
      {/* @include('admin.alert') */}
      {Object.keys(products).length !== 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
              <div className="m-l-25 m-r--38 m-lr-0-xl">
                <div className="wrap-table-shopping-cart">
                  {Object.entries(carts).map(([idcart, cart]) => (
                    <div key={idcart} className="cart">
                      <h3>Giỏ hàng {idcart}</h3>
                      <table className="table-shopping-cart">
                        <tbody>
                          <tr className="table_head">
                            <th className="column-1" style={{ textAlign: 'center' }}>Sản phẩm</th>
                            <th className="column-2" style={{ textAlign: 'center' }}></th>
                            <th className="column-3" style={{ textAlign: 'center' }}>Giá tiền</th>
                            <th className="column-4" style={{ textAlign: 'center' }}>Số lượng</th>
                            <th className="column-5" style={{ textAlign: 'center' }}>Thành tiền</th>
                            <th className="column-6">&nbsp;</th>
                          </tr>
                          {Object.entries(cart).map(([productId, quantity]) => {
                            const product = products.find(prod => prod.id === parseInt(productId));
                            const price = product.price_sale !== 0 ? product.price - ((product.price_sale * product.price) / 100) : product.price;
                            const priceEnd = price * quantity;
                            return (
                              <tr key={productId} className="table_row">
                                <td className="column-1">
                                  <div className="how-itemcart1">
                                    <img src={product.image} alt="IMG" />
                                  </div>
                                </td>
                                <td className="column-2">{product.name}</td>
                                <td className="column-3">{Number(price).toLocaleString()}</td>
                                <td className="column-4">
                                  <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                    <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                      <i className="fs-16 zmdi zmdi-minus"></i>
                                    </div>
                                    <input className="mtext-104 cl3 txt-center num-product" type="number" name={`num_product[${product.id}]`} value={quantity} />
                                    <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                      <i className="fs-16 zmdi zmdi-plus"></i>
                                    </div>
                                  </div>
                                </td>
                                <td className="column-5">{Number(priceEnd).toLocaleString()} vnđ</td>
                                <td className="p-r-15">
                                  <a href={`/carts/delete/${idcart}/${product.id}`}>Xóa</a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm " style={{ margin: 'auto' }}>
                        <a href={`/showCart/${idcart}`} className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                          View Cart
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {idcart_can_tim !== null && (
              <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                  <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>
                  <div className="flex-w flex-t p-t-27 p-b-33">
                    <div className="size-208">
                      <span className="mtext-101 cl2">Total:</span>
                    </div>
                    <div className="size-209 p-t-1">
                      <span className="mtext-110 cl2">{Number(total).toLocaleString()} vnđ</span>
                    </div>
                  </div>
                  <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                    <div className="size-100 p-r-18 p-r-0-sm w-full-ssm">
                      <div className="p-t-15">
                        <span className="stext-112 cl8">Thông Tin Khách Hàng</span>
                        {Object.entries(carts).map(([idcart, cart]) => {
                          if (idcart === idcart_can_tim) {
                            return (
                              <div key={idcart} className=" bg0 m-b-12" style={{ marginTop: '20px' }}>
                                <label htmlFor="date">Chọn ngày:</label>
                                <input type="date" className="form-control" id="date" name="date" min={new Date().toISOString().split('T')[0]} />
                                <div className=" bg0 m-b-12">
                                  <label htmlFor="date">Chọn khoảng cách:</label>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" value="1" name="distance" id="1month" checked />
                                    <label className="form-check-label" htmlFor="1month">1 tháng</label>
                                  </div>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" value="3" name="distance" id="3month" />
                                    <label className="form-check-label" htmlFor="3month">3 tháng</label>
                                  </div>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" value="6" name="distance" id="6month" />
                                    <label className="form-check-label" htmlFor="6month">6 tháng</label>
                                  </div>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" value="12" name="distance" id="12month" />
                                    <label className="form-check-label" htmlFor="12month">12 tháng</label>
                                  </div>
                                </div>
                                <div className="bor8 bg0 m-b-12">
                                  <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="name" placeholder="Tên khách Hàng" required />
                                </div>
                                <div className="bor8 bg0 m-b-12">
                                  <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="phone" placeholder="Số Điện Thoại" required />
                                </div>
                                <div className="bor8 bg0 m-b-12">
                                  <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="address" placeholder="Địa Chỉ Giao Hàng" required />
                                </div>
                                <div className="bor8 bg0 m-b-12">
                                  <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="email" placeholder="Email Liên Hệ" required />
                                </div>
                                <div className="bor8 bg0 m-b-12">
                                  <textarea className="cl8 plh3 size-111 p-lr-15" name="content"></textarea>
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                  <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">Đặt Hàng</button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2>Giỏ hàng trống</h2>
          <img src="https://assets-v2.lottiefiles.com/a/f5a0b160-1165-11ee-8038-63e3305019f4/oqG6VEkEjf.gif" alt="this slowpoke moves" width="250" />
        </div>
      )}
      {/* @csrf */}
    </form>
  );
};

export default CartPackage;
