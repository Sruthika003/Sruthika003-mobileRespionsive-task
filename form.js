document.getElementById('formSubmit').addEventListener('click', function () {
    // Clear previous errors
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(error => error.style.display = 'none');

    let isValid = true;

    // Validate Personal Data
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    const phoneNo = document.getElementById('phoneNo').value.trim();
    if (!phoneNo || !/^[6-9]\d{9}$/.test(phoneNo)) { 
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { 
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    const address = document.getElementById('address').value.trim();
    if (!address) {
        document.getElementById('addressError').style.display = 'block';
        isValid = false;
    }

    const pincode = document.getElementById('pincode').value.trim();
    if (!pincode || !/^\d{6}$/.test(pincode)) { 
        document.getElementById('pincodeError').style.display = 'block';
        isValid = false;
    }

    const state = document.getElementById('state').value.trim();
    if (!state) {
        document.getElementById('stateError').style.display = 'block';
        isValid = false;
    }

    // Validate Education Details
    const degree = document.getElementById('degree').value.trim();
    if (!degree) {
        document.getElementById('degreeError').style.display = 'block';
        isValid = false;
    }

    const collegeName = document.getElementById('collegeName').value.trim();
    if (!collegeName) {
        document.getElementById('collegeNameError').style.display = 'block';
        isValid = false;
    }

    const collegePercentage = document.getElementById('collegePercentage').value.trim();
    if (!collegePercentage || isNaN(collegePercentage)) {
        document.getElementById('collegePercentageError').style.display = 'block';
        isValid = false;
    }

    const hscName = document.getElementById('hscName').value.trim();
    if (!hscName) {
        document.getElementById('hscNameError').style.display = 'block';
        isValid = false;
    }

    const hscPercentage = document.getElementById('hscPercentage').value.trim();
    if (!hscPercentage || isNaN(hscPercentage)) {
        document.getElementById('hscPercentageError').style.display = 'block';
        isValid = false;
    }

    const sslcName = document.getElementById('sslcName').value.trim();
    if (!sslcName) {
        document.getElementById('sslcNameError').style.display = 'block';
        isValid = false;
    }

    const sslcPercentage = document.getElementById('sslcPercentage').value.trim();
    if (!sslcPercentage || isNaN(sslcPercentage)) {
        document.getElementById('sslcPercentageError').style.display = 'block';
        isValid = false;
    }

    // Validate Personal Summary
    const summary = document.getElementById('summary').value.trim();
    if (!summary) {
        document.getElementById('summaryError').style.display = 'block';
        isValid = false;
    }

    // Validate Projects
    const project = document.getElementById('project').value.trim();
    if (!project) {
        document.getElementById('projectError').style.display = 'block';
        isValid = false;
    }

    // If any field is invalid, prevent submission
    if (!isValid) {
        alert("Please fix the errors before submitting.");
    } else {
        alert("Form submitted successfully!");
    }
});

document.getElementById('phoneNo').addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '');
    if (this.value.length > 0 && !/^[6-9]/.test(this.value[0])) {
        this.value = ''; 
        return;
    }

    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});
document.getElementById('pincode').addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '');
    if (this.value.length > 0 && !/^[1-9]/.test(this.value[0])) {
        this.value = ''; 
        return;
    }
    if (this.value.length > 6) {
        this.value = this.value.slice(0, 6); 
    }
});