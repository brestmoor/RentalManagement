import toastr from 'toastr';

export function successToast(text: string) {
  toastr.success(text, null, toastr.options = {
    "newestOnTop": true,
    "positionClass": "toast-top-center",
    "showDuration": "400",
    "hideDuration": "400",
    "timeOut": "1500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  })
}

export function errorToast(text: string) {
  toastr.error(text, null, toastr.options = {
    "closeButton": true,
    "newestOnTop": true,
    "positionClass": "toast-top-center",
    "showDuration": "300",
    "hideDuration": "500",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  })
}
