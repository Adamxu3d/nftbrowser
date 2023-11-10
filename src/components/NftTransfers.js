import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { infoCircleOutlined } from "@ant-design/icons";
import { getNFTTransfers } from "../utils";
const ModalContent = ({ nft }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { token_address, token_id } = nft;

  useEffect(() => {
    getNFTTransfers(token_address, token_id)
      .then((resp) => {
        setData(resp.result);
      })
      .finally(() => {
        setLoading(false);
      });
  });
};
// 解构语法
// defines the name of the NFT
const NftTransfers = ({ nft }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <tooltip title="Transfer(s) on this NFT">
        <Button
          type="primary"
          style={{ border: "none" }}
          size="large"
          shape="circle"
          icon={<infoCircleOutlined />}
          onClick={() => setModalOpen(true)}
        />
      </tooltip>

      <Modal
        width={1000}
        title="Transfer(s) list"
        destroyOnClose
        open={modalOpen}
        footer={null}
        onCancel={() => setModalOpen(false)}
      >
        Nft Transfers
      </Modal>
    </>
  );
};

export default NftTransfers;
