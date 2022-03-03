var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  let Products = [
    {
      Name: "Gown",
      Category: "Dress",
      Discription: "attires are mean to be for confident",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRws4zT4Lk79_rxBQDXcxTG1IS5oUvKtBk7SQ&usqp=CAU"
    },
    {
      Name: "Gown",
      Category: "Dress",
      Discription: "attires are mean to be for confident",
      Image: "https://n.nordstrommedia.com/id/sr3/2e036672-dd58-4404-8d44-12bd64b08e91.jpeg?h=365&w=240&dpr=2"
    },
    {
      Name: "Gown",
      Category: "Dress",
      Discription: "attires are mean to be for confident",
      Image: "https://dreamdressexpress.com/wp-content/uploads/2020/08/ew120108_red_f.jpg"
    },
    {
      Name: "Gown",
      Category: "Dress",
      Discription: "attires are mean to be for confident",
      Image: "https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522ca/-473Wx593H-461088032-blue-MODEL.jpg"
    }

  ]


  res.render('index',{ Products, Admin: false });
});

module.exports = router;
