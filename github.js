const createApp = require('github-app');

const app = createApp({
    // Your app id
    id: 4756,
    // The private key for your app, which can be downloaded from the
    // app's settings: https://github.com/settings/apps
    cert: require('fs').readFileSync('private-key.pem')
});

/*
app.asApp().then(github => {
    console.log("Installations:")
    github.integrations.getInstallations({}).then(console.log);
});
*/
//https://niffler.software/?installation_id=48636

var installationId = 48636;

app.asInstallation(installationId).then(github => {
    /*
    github.repos.getForOrg({
        org: "nifflerbot"
    }, function(err, res) {
        if (err) {
            console.log(err.toJSON());
        } else {
            console.log(res);
        }
    });

    github.issues.getMilestones({
        owner: "flyve-mdm",
        repo: "flyve-mdm-glpi-plugin"
    }, function(err, res) {
        if (err) {
            console.log(err.toJSON());
        } else {
            console.log(res);
        }
    });
*/
    github.integrations.getInstallationRepositories({
    }, function(err, res) {
        if (err) {
            console.log(err.toJSON());
        } else {
            console.log(res.data.repositories);
        }
    });

    
});

/*

data = [{
    id: 48636,
    account: [
        Object
    ],
    repository_selection: 'all',
    access_tokens_url: 'https://api.github.com/installations/48636/access_tokens',
    repositories_url: 'https://api.github.com/installation/repositories',
    html_url: 'https://github.com/organizations/nifflerbot/settings/installations/48636',
    integration_id: 4756,
    app_id: 4756,
    target_id: 31359299,
    target_type: 'Organization',
    permissions: [
        Object
    ],
    events: [
        Array
    ],
    created_at: '2017-08-26T14:40:15Z',
    updated_at: '2017-08-26T14:40:15Z',
    single_file_name: null
}];

*/