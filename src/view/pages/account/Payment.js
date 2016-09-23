/**
 * Created by chenrs on 2016/9/18.
 */
'use strict';
// Import React
import React from 'react';
import { Link } from 'react-router';

// Create class called PaymentSuccess that extends the base React Component class
class PaymentSuccess extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="paymentSuccessWrap">
                <header className="headContent">
                    <h1>支付成功</h1>
                </header>

                <section className="successContent">
                    <div className="doneTrading">
                        <img src="src/images/icons/done_trading.png" alt=""/>
                    </div>
                    <h3>支付成功</h3>
                </section>

                <scetion className="insuranceContent">
                    <div className="insurance">
                        <ul>
                            <li>保险公司</li>
                            <li className="blackFont">平安车险</li>
                        </ul>
                        <ul>
                            <li>交强险保单号</li>
                            <li>等待保险公司出单中</li>
                        </ul>
                        <ul>
                            <li>商业险保单号</li>
                            <li>等待保险公司出单中</li>
                        </ul>
                    </div>
                    <div className="goDetailContent">
                        <div className="goDetail">
                            <dl>
                                <dd>恭喜！你的风险防御力提高5分！</dd>
                                <dd><Link activeClassName="link">详情</Link></dd>
                            </dl>
                        </div>
                    </div>
                </scetion>

                <section className="tradeNumber">
                    <div className="tradeBox">
                        <ul>
                            <li>交易时间</li>
                            <li>2016.01.02 15:13</li>
                        </ul>
                        <ul>
                            <li>交易单号</li>
                            <li>10012016080300000010</li>
                        </ul>
                    </div>
                </section>
                <section className="tips">
                    <p>纸质保单将在3个工作日内将寄到指定地址</p>
                </section>
                <section className="viewButton">
                    <Link activeClassName="link" to="/">查看保单</Link>
                    <Link activeClassName="link" to="/Payment">返回首页</Link>
                </section>
            </section>
        )
    }
}
export default PaymentSuccess;