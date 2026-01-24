<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GPA Calculator</title>

    <!-- Link Coustom CSS -->
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" />
    <!-- Link Icons -->
    <link rel="icon" href="resourses/company_logo.png" />
</head>

<body class="main-body-2">

    <div class="container-fluid">
        <?php include 'header.php'; ?>
        <div class="row">
            <div class="col-12 py-3 p-3">
                <h2 class="mt-4 text-center m-auto fs-1">Water Bill Calculator</h2>
                <p class="mt-2 fs-4 text-center m-auto">Calculate your water bill.</p>
                <hr />
                <div class="row p-3 py-3">
                    <div class="col-md-4 col-12 p-3 py-3 electricity m-auto">
                        <div class="mb-3">
                            <label>Subject Grade 1</label>
                            <input type="text" class="form-control" id="sg_1" placeholder="Like (A / B / C / D / F)" />
                        </div>

                        <div class="mb-3">
                            <label>Subject Grade 2</label>
                            <input type="text" class="form-control" id="sg_2" placeholder="Like (A / B / C / D / F)" />
                        </div>
                        
                        <div class="mb-3">
                            <label>Subject Grade 3</label>
                            <input type="text" class="form-control" id="sg_3" placeholder="Like (A / B / C / D / F)" />
                        </div>
                        
                        <div class="mb-3">
                            <label>Subject Grade 4</label>
                            <input type="text" class="form-control" id="sg_4" placeholder="Like (A / B / C / D / F)" />
                        </div>

                        <div class="mb-3">
                            <label>Subject Grade 5</label>
                            <input type="text" class="form-control" id="sg_5" placeholder="Like (A / B / C / D / F)" />
                        </div>

                        <div class="mb-3">
                            <label>Subject Grade 6</label>
                            <input type="text" class="form-control" id="sg_6" placeholder="Like (A / B / C / D / F)" />
                        </div>
                        
                        <div class="row">
                            <div class="col-6 d-grid mb-3">
                                <button class="btn btn-outline-success " onclick="calculate_gpa()">Calculate</button>
                            </div>
                            <div class="col-6 d-grid mb-3 text-end">
                                <a href="calc_list.php" class="btn btn-secondary">Back</a>

                            </div>
                        </div>
                        <hr>
                        <div class="result-box mt-3 p-3">
                            <table class="table table-success table-striped-columns">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Grade</th>
                                        <th scope="col">Point</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>A</td>
                                        <td>4.0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>B</td>
                                        <td>3.0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>C</td>
                                        <td>2.0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>D</td>
                                        <td>1.0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>F</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>

                            <strong>Your GPA:</strong> <span id="gpa">0.00</span><br>

                        </div>


                    </div>
                </div>
            </div>
        </div>
        <?php include 'footer.php'; ?>
    </div>


    <script src="js/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>