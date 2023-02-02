//Bai1
const inRaDaySo = () => {
  document.getElementById("inRaDaySo").onclick = () => {
    let item = "";
    for (let i = 1; i <= 100; i++) {
      if (i % 10 == 0) {
        item += i + `<br>`;
      } else {
        item += i + " ";
      }
    }
    return (document.getElementById("bai1").innerHTML = item);
  };
};
inRaDaySo();

//Bai2
const timSoNguyenTo = () => {
  document.getElementById("timSoNguyenTo").onclick = () => {
    let soNguyen = document.getElementById("nhapSoNguyen").value;
    let item = "";
    for (let i = 2; i <= soNguyen; i++) {
      let test = true;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          test = false;
          break;
        }
      }
      if (test) {
        item += i + " ";
      }
    }
    return (document.getElementById("bai2").innerHTML = item);
  };
};
timSoNguyenTo();

//Bai3
const tinhTong = () => {
  document.getElementById("timTong").onclick = () => {
    let soN = document.getElementById("nhapN").value;
    let tong = 0;
    for (let i = 2; i <= soN; i++) {
      tong += i;
    }
    return (document.getElementById("bai3").innerHTML = tong + 2 * soN);
  };
};
tinhTong();

//Bai4
const timUocChung = () => {
  document.getElementById("timUoc").onclick = () => {
    let N = document.getElementById("nhapSoTuNhien").value;
    let item = "";
    for (let i = 0; i <= N; i++) {
      if (N % i == 0) {
        item += i + " ";
      }
    }
    return (document.getElementById("bai4").innerHTML = N + `: ` + item);
  };
};
timUocChung();

//Bai5
const daoNguoc = () => {
  document.getElementById("daoNguoc").onclick = () => {
    let daoNguocN = document.getElementById("daoNguocN").value;
    //Cách 1
    // let newArr = daoNguocN.split("");
    // console.log(newArr);
    // let newArr1 = "";
    // for (let i = newArr.length - 1; i >= 0; i--) {
    //   newArr1 += newArr[i];
    // }
    // document.getElementById("bai5").innerHTML = newArr1;
    //Cách 2
    let newArr = [...daoNguocN];
    let newArr1 = newArr.reverse().join(""); //join ko thay đổi mảng cũ nên phải báo 1 mảng mới;
    document.getElementById("bai5").innerHTML = newArr1;
  };
};
daoNguoc();

//Bai6
const timX = () => {
  document.getElementById("timX").onclick = () => {
    console.log("hello");
    let tong = 0;
    for (let i = 0; tong <= 100; i++) {
      tong += i;
      if (tong <= 100) {
        document.getElementById("bai6").innerHTML = i;
      }
    }
  };
};
timX();

//Bai7
const vietBangCuuChuong = () => {
  document.getElementById("vietBangCuuChuong").onclick = () => {
    let bangCuuChuongSoN = document.getElementById("bangCuuChuongSoN").value;
    let item = "";
    for (let i = 0; i <= 10; i++) {
      item += `${bangCuuChuongSoN} x ${i} = ${bangCuuChuongSoN * i} <br>`;
    }
    return (document.getElementById("bai7").innerHTML = item);
  };
};
vietBangCuuChuong();

//Bai8
const chiaBai = () => {
  document.getElementById("chiaBai").onclick = () => {
    let players = [[], [], [], []];
    let a = 0;
    let cards = [
      "4K",
      "KH",
      "5C",
      "KA",
      "QH",
      "KD",
      "2H",
      "10S",
      "AS",
      "7H",
      "9K",
      "10D",
    ];
    cards.forEach((item) => {
      players[a].push(item);
      a += 1;
      if (a >= players.length) {
        a = 0;
      }
    });
    document.getElementById("bai8").innerHTML = `${players[0]}<br>
                                               ${players[1]}<br>
                                               ${players[2]}<br>
                                               ${players[3]}<br>
                                               `;
  };
};
chiaBai();

//Bai9
const timChoTimGa = () => {
  document.getElementById("timChoVaGa").onclick = () => {
    //x : là gà
    //y : là chó
    //dùng công thức
    // 2x+4y=n
    // x+y=m  (lấy vế lớn trừ vế nhỏ)
    // x+3y=n-m
    //x+y+2y=n-m
    //m+2y=n-m
    //y=(n-2m):2
    let m = document.getElementById("nhapTongSoCon").value;
    let n = document.getElementById("nhapTongSoChan").value;
    let y = (n - 2 * m) / 2;
    let x = m - y;
    document.getElementById("bai9.1").innerHTML = `Số chó là: ${y}`;
    document.getElementById("bai9.2").innerHTML = `Số gà là: ${x}`;
  };
};
timChoTimGa();

//Bai10
const timGoc = () => {
  document.getElementById("timGoc").onclick = () => {
    let soGio = document.getElementById("soGio").value;
    let soPhut = document.getElementById("soPhut").value;
    let soGoc = Math.abs(30 * soGio - (11 / 2) * soPhut);
    document.getElementById("bai10").innerHTML = `Góc 1 là: ${soGoc}`;
  };
};
timGoc();
