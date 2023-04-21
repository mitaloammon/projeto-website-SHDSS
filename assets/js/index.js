function addLinkIframe(titulo, link) {
    $("#modalTransparency").modal("show");
    $("#modalTransparency iframe").attr("src", link);
    $("#modalTransparency #modalTransparencyLabel").html(titulo);
}

function closeModal() {
    $("#modalTransparency").modal("hide");
}
