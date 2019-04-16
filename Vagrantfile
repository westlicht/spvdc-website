# -*- mode: ruby -*-
# vi: set ft=ruby :

$provision_script = <<-SCRIPT

echo "Installing basic tools ..."
sudo apt-get update -qq
sudo apt-get install -y git curl

echo "Installing nodejs ..."
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo apt-get install -y nodejs

echo "Setting up environment ..."
echo "cd /vagrant" >> /home/vagrant/.bashrc

SCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.network "forwarded_port", guest: 3333, host: 3333
  config.vm.network "forwarded_port", guest: 8800, host: 8800
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 8081, host: 8081

  config.vm.provider "virtualbox" do |v|
    v.memory = 4096
	v.cpus = 2
  end

  # provisioning scripts
  config.vm.provision :shell, inline: $provision_script
end
