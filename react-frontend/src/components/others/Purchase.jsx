import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export class Purchase extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <h1>Hướng dẫn Mua hàng</h1>

              <h2>1. Chọn Sản phẩm</h2>
              <p>
                Trang web của chúng tôi cung cấp một loạt các sản phẩm chất
                lượng. Dùng thanh tìm kiếm hoặc duyệt qua các danh mục để tìm
                sản phẩm bạn quan tâm.
              </p>

              <h2>2. Thêm vào Giỏ hàng</h2>
              <p>
                Khi bạn chọn được sản phẩm, nhấp vào nút "Thêm vào Giỏ hàng".
                Bạn có thể tiếp tục mua sắm hoặc chọn "Thanh toán" để tiến hành
                thanh toán.
              </p>

              <h2>3. Kiểm tra Giỏ hàng</h2>
              <p>
                Trong Giỏ hàng, kiểm tra lại các sản phẩm, số lượng và tổng
                cộng. Bạn cũng có thể cập nhật số lượng hoặc xóa sản phẩm không
                cần thiết.
              </p>

              <h2>4. Thanh toán</h2>
              <p>
                Chọn "Thanh toán" và điền thông tin thanh toán của bạn. Chúng
                tôi sử dụng các phương thức thanh toán an toàn để đảm bảo giao
                dịch của bạn.
              </p>

              <h2>5. Xác nhận đơn hàng</h2>
              <p>
                Sau khi thanh toán thành công, bạn sẽ nhận được email xác nhận
                đơn hàng cùng với thông tin chi tiết. Vui lòng kiểm tra email
                của bạn và giữ lại email xác nhận.
              </p>

              <h2>6. Giao hàng</h2>
              <p>
                Đơn hàng của bạn sẽ được xử lý và gửi đi trong thời gian ngắn
                nhất. Bạn sẽ nhận được thông báo khi đơn hàng của bạn được
                chuyển đi cùng với thông tin theo dõi (nếu có).
              </p>

              <h2>7. Nhận hàng</h2>
              <p>
                Khi bạn nhận được hàng, vui lòng kiểm tra kỹ trước khi ký nhận.
                Nếu có vấn đề gì, hãy liên hệ với chúng tôi ngay lập tức.
              </p>

              <h2>8. Hỗ trợ khách hàng</h2>
              <p>
                Nếu bạn có bất kỳ câu hỏi hoặc vấn đề nào liên quan đến việc mua
                hàng, vui lòng liên hệ với đội ngũ hỗ trợ khách hàng của chúng
                tôi qua địa chỉ email [địa chỉ email hỗ trợ khách hàng] hoặc số
                điện thoại [số điện thoại hỗ trợ khách hàng].
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Purchase;
