
param(
    [string]$ci_token,
    [string]$project_id,
    [string]$release_message
)

$dir = Split-Path $MyInvocation.MyCommand.Path
Push-Location $dir

npm i -g firebase-tools
write-host "Starting hosting deployment.";
write-host "Firebase version:";
firebase --version;

try{
    write-Host "firebase use -add";
    firebase use -add --token "$ci_token";
    write-Host "firebase use $project_id";
    firebase use $project_id --token "$ci_token";
    Write-Host "firebase target:apply hosting myapp $project_id";
    firebase target:apply hosting myapp $project_id --token "$ci_token";
    write-host "firebase deploy --only hosting --token $ci_token --project $project_id --message Release/$release_message";
    firebase deploy --only hosting:myapp --token "$ci_token" --project $project_id --message "Release/$release_message";
    write-host "Hosting deployment finished.";
}
catch{
    Write-Host $_.ScriptStackTrace
}


Pop-Location