exports.getAll = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query('SELECT * FROM = employees', (err, restult) => {
            if (err) return res.send(err);

            res.json(result);
        });
    });
};

exports.create = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query('INSERT INTO emproyees SET ?', [req.body], (err, result) => {
            if (err) return res.send(err);

            res.send('creación exitosa');
        });
    });
};