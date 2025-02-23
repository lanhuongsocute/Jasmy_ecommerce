import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Refund extends Component {
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
              <h4 className="section-title-login">Chính sách đổi trả</h4>
              <div className="section-title-contact">
                <h2>Cam kết của chúng tôi</h2>
                Tại [Tên Công Ty], chúng tôi cam kết đảm bảo sự hài lòng của bạn
                với mỗi đơn hàng. Chúng tôi hiểu rằng có những tình huống bạn có
                thể cần yêu cầu đổi trả. Chính sách này mô tả các quy định để
                quá trình này diễn ra một cách thuận lợi nhất.
              </div>

              <h2>1. Điều kiện đổi trả</h2>
              <ul>
                <li>
                  <strong>Sản phẩm hỏng hoặc lỗi:</strong> Nếu bạn nhận được sản
                  phẩm bị hỏng hoặc lỗi, vui lòng liên hệ chúng tôi trong vòng
                  [số ngày] ngày kể từ ngày nhận hàng. Chúng tôi sẽ thay thế sản
                  phẩm hoặc hoàn tiền cho bạn.
                </li>
                <li>
                  <strong>Nhận sai sản phẩm:</strong> Trong trường hợp hiếm hoi
                  bạn nhận sai sản phẩm, hãy thông báo cho chúng tôi trong vòng
                  [số ngày] ngày kể từ ngày nhận hàng. Chúng tôi sẽ sắp xếp
                  chuyển phát lại sản phẩm chính xác hoặc hoàn tiền cho bạn.
                </li>
                <li>
                  <strong>Dịch vụ không đạt chất lượng:</strong> Nếu bạn không
                  hài lòng với dịch vụ của [Tên Công Ty], vui lòng liên hệ chúng
                  tôi trong vòng [số ngày] ngày kể từ ngày thực hiện dịch vụ.
                  Chúng tôi sẽ làm việc với bạn để giải quyết vấn đề và nếu cần,
                  thực hiện đổi trả.
                </li>
              </ul>

              <h2>2. Quy trình đổi trả</h2>
              <ol>
                <li>
                  <strong>Liên hệ hỗ trợ khách hàng:</strong> Gửi email tới địa
                  chỉ [email hỗ trợ khách hàng] hoặc gọi điện thoại theo số [số
                  điện thoại hỗ trợ khách hàng] với số đơn hàng và chi tiết vấn
                  đề.
                </li>
                <li>
                  <strong>Trả lại sản phẩm (nếu áp dụng):</strong> Đối với
                  trường hợp cần trả lại sản phẩm, chúng tôi có thể yêu cầu bạn
                  trả lại sản phẩm. Chúng tôi sẽ cung cấp hướng dẫn về cách trả
                  lại sản phẩm và chi phí vận chuyển sẽ được chúng tôi chi trả.
                </li>
                <li>
                  <strong>Xác nhận đổi trả:</strong> Sau khi nhận được yêu cầu
                  của bạn và gửi trả lại sản phẩm (nếu cần), chúng tôi sẽ xem
                  xét yêu cầu và thông báo cho bạn về việc chấp nhận hoặc từ
                  chối đổi trả.
                </li>
                <li>
                  <strong>Thời gian xử lý đổi trả:</strong> Nếu đổi trả được
                  chấp nhận, chúng tôi sẽ xử lý hoàn tiền và áp dụng nó tự động
                  vào phương thức thanh toán ban đầu của bạn trong vòng [số
                  ngày] ngày.
                </li>
              </ol>

              <h2>3. Sản phẩm không đủ điều kiện đổi trả</h2>
              <p>
                Vui lòng lưu ý rằng một số sản phẩm không đủ điều kiện để đổi
                trả, bao gồm:
              </p>
              <ul>
                <li>Sản phẩm tải xuống hoặc nội dung số</li>
                <li>Thẻ quà tặng</li>
                <li>Dịch vụ đã được thực hiện</li>
              </ul>

              <h2>4. Liên hệ chúng tôi</h2>
              <p>
                Nếu bạn có bất kỳ câu hỏi nào về chính sách đổi trả của chúng
                tôi, vui lòng liên hệ với chúng tôi theo địa chỉ email [địa chỉ
                email hỗ trợ khách hàng] hoặc số điện thoại [số điện thoại hỗ
                trợ khách hàng]. Đội ngũ hỗ trợ khách hàng của chúng tôi sẽ hỗ
                trợ bạn.
              </p>

              <p>
                [Tên Công Ty] giữ quyền cập nhật hoặc điều chỉnh chính sách đổi
                trả này vào bất kỳ lúc nào mà không cần thông báo trước.
              </p>

              <p>Cảm ơn bạn đã chọn [Tên Công Ty].</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Refund;
